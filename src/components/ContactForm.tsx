"use client";

import {type FieldErrors, type FieldPath, useForm, type UseFormRegister} from "react-hook-form";
import {useFormState, useFormStatus} from "react-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import {useCallback, useEffect, useRef} from "react";
import {useMotionValueEvent, useSpring} from "framer-motion";

import {formSchema} from "@/utils/validation";
import {Plane} from "@/assets/svg";
import {sendEmail, type State} from "@/app/actions";

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export function FormContent({
  register,
  isValid,
  errors,
}: {
  register: UseFormRegister<FormValues>;
  isValid: boolean;
  errors: FieldErrors<FormValues>;
}) {
  const {pending} = useFormStatus();

  return (
    <>
      <div>
        <label className="flex w-full flex-col">
          Name
          <input {...register("name")} className="form__input" placeholder="Name" />
        </label>
        {errors.name ? <span>{errors.name.message}</span> : null}
      </div>

      <div>
        <label>
          Email
          <input {...register("email")} className="form__input" placeholder="Email" />
        </label>
        {errors.email ? <span>{errors.email.message}</span> : null}
      </div>

      <div className="md:col-span-2">
        <label>
          Message
          <textarea {...register("message")} className="form__textarea" placeholder="Message" />
        </label>
        {errors.message ? <span>{errors.message.message}</span> : null}
      </div>

      <button
        className="text-on-primary h-8 rounded-md bg-primary px-12 py-2 text-sm font-medium text-black hover:bg-primary/90 md:col-span-2"
        disabled={pending || !isValid}
        type="submit"
      >
        <Plane />
      </button>
      {pending ? <span>Loading...</span> : null}
    </>
  );
}

export function ContactForm() {
  const {
    register,
    formState: {isValid, errors},
    setError,
  } = useForm<FormValues>({
    mode: "all",
    resolver: zodResolver(formSchema),
  });
  const [state, formAction] = useFormState<State, FormData>(sendEmail, null);

  useEffect(() => {
    if (!state) {
      return;
    }
    if (state.status === "error") {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<FormValues>, {
          message: error.message,
        });
      });
    }
    if (state.status === "success") {
      alert(state.message);
    }
  }, [state, setError]);

  const formRef = useRef<HTMLFormElement | null>(null);
  const springAngle = useSpring(0, {stiffness: 1000, damping: 200});

  const mouseMoveListener = useCallback(
    ({clientX, clientY}: MouseEvent) => {
      if (formRef.current === null) {
        return;
      }
      const {x, y, width, height} = formRef.current.getBoundingClientRect();
      const dx = clientX - (x + 0.5 * width);
      const dy = clientY - (y + 0.5 * height);
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI - 90;

      springAngle.set(angle);
    },
    [springAngle],
  );

  useMotionValueEvent(springAngle, "change", (angle) => {
    if (formRef.current === null) {
      return;
    }
    formRef.current.style.setProperty("--startDeg", `${angle}deg`);
  });

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener, false);

    return () => window.removeEventListener("mousemove", mouseMoveListener);
  }, [mouseMoveListener]);

  return (
    <form ref={formRef} action={formAction} className="form__container">
      <h2 className="text-3xl font-bold md:col-span-2">Get in touch</h2>
      <FormContent errors={errors} isValid={isValid} register={register} />
    </form>
  );
}
