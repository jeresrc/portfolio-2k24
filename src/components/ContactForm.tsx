'use client'

import {FieldErrors, FieldPath, useForm, UseFormRegister} from 'react-hook-form'
import {sendEmail, State} from '@/app/actions'
import {useFormState, useFormStatus} from 'react-dom'
import {zodResolver} from '@hookform/resolvers/zod'
import {formSchema} from '@/utils/validation'
import {useCallback, useEffect, useRef, useState} from 'react'
import {Plane} from '@/assets/svg'
import {
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from 'framer-motion'

export interface FormValues {
  name: string
  email: string
  message: string
}

export function FormContent({
  register,
  isValid,
  errors,
}: {
  register: UseFormRegister<FormValues>
  isValid: boolean
  errors: FieldErrors<FormValues>
}) {
  const {pending} = useFormStatus()

  return (
    <>
      <div>
        <label className='flex w-full flex-col'>
          Name
          <input
            {...register('name')}
            placeholder='Name'
            className='form__input'
          />
        </label>
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>
          Email
          <input
            {...register('email')}
            placeholder='Email'
            className='form__input'
          />
        </label>
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className='md:col-span-2'>
        <label>
          Message
          <textarea
            {...register('message')}
            placeholder='Message'
            className='form__textarea'
          />
        </label>
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <button
        type='submit'
        disabled={pending || !isValid}
        className='text-on-primary h-8 rounded-md bg-primary px-12 py-2 text-sm font-medium text-black hover:bg-primary/90 md:col-span-2'
      >
        <Plane />
      </button>
      {pending && <span>Loading...</span>}
    </>
  )
}

export function ContactForm() {
  const {
    register,
    formState: {isValid, errors},
    setError,
  } = useForm<FormValues>({
    mode: 'all',
    resolver: zodResolver(formSchema),
  })
  const [state, formAction] = useFormState<State, FormData>(sendEmail, null)

  useEffect(() => {
    if (!state) {
      return
    }
    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<FormValues>, {
          message: error.message,
        })
      })
    }
    if (state.status === 'success') {
      alert(state.message)
    }
  }, [state, setError])

  const formRef = useRef<HTMLFormElement | null>(null)
  const springAngle = useSpring(0, {stiffness: 1000, damping: 200})

  const mouseMoveListener = useCallback(
    ({clientX, clientY}: MouseEvent) => {
      if (formRef.current === null) {
        return
      }
      const {x, y, width, height} = formRef.current.getBoundingClientRect()
      const dx = clientX - (x + 0.5 * width)
      const dy = clientY - (y + 0.5 * height)
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI - 90

      springAngle.set(angle)
    },
    [springAngle]
  )

  useMotionValueEvent(springAngle, 'change', (angle) => {
    if (formRef.current === null) {
      return
    }
    formRef.current.style.setProperty('--startDeg', `${angle}deg`)
  })

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveListener, false)
    return () => window.removeEventListener('mousemove', mouseMoveListener)
  }, [mouseMoveListener])

  return (
    <form action={formAction} ref={formRef} className='form__container'>
      <h2 className='text-3xl font-bold md:col-span-2'>Get in touch</h2>
      <FormContent register={register} isValid={isValid} errors={errors} />
    </form>
  )
}
