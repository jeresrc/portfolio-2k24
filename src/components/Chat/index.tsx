"use client";

import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {PulseLoader} from "react-spinners";

import {Plane, Spin, TailIn, TailOut} from "@/assets/svg";
import {useChatStore} from "@/store/chat";
import {cn} from "@/utils/cn";

import FormContainer from "../FormContainer";
import {GradientHr} from "../GradientHr";

import {getChatAnswer} from "./actions";
import {transition, variants} from "./anim";

interface ChatProps {
  initialMessages: string[];
}

export function Chat({initialMessages}: ChatProps) {
  const [messages, addMessage, setMessages] = useChatStore((store) => [
    store.messages,
    store.addMessage,
    store.setMessages,
  ]);

  useEffect(() => {
    if (!initialMessages.length) return;

    setMessages(
      initialMessages.map((text, i) => ({
        id: String(Date.now()) + i,
        type: "bot",
        text,
      })),
    );
  }, [initialMessages, setMessages]);

  const [question, setQuestion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);

  async function sendChatQuestion(question: string) {
    if (loading) return;

    setLoading(true);
    setQuestion("");
    addMessage({id: String(Date.now()), type: "user", text: question});

    try {
      const text = await getChatAnswer(question);

      if (!text) {
        setLoading(false);
        addMessage({
          id: String(Date.now()),
          type: "bot",
          text: "Sorry, I did not understand that. Please try again.",
        });

        return;
      }
      addMessage({id: String(Date.now()), type: "bot", text});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      addMessage({
        id: String(Date.now()),
        type: "bot",
        text: "Sorry, I did not understand that. Please try again.",
      });
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    await sendChatQuestion(question);
  }

  useEffect(() => {
    container.current?.scrollTo(0, container.current.scrollHeight);
  }, [messages]);

  return (
    <main>
      <FormContainer className="m-auto mt-8 flex flex-col gap-0 overflow-hidden">
        <div
          ref={container}
          className="relative flex h-[480px] flex-col items-end justify-start gap-1 overflow-y-auto p-4 px-6"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "relative inline-block min-w-0 max-w-[80%] text-pretty rounded-md p-2 px-[11px] text-left text-base leading-tight text-black dark:text-white sm:leading-[1.4]",
                message.type === "bot"
                  ? "peer self-start rounded-tl-none bg-[#bbb3] dark:bg-neutral-800"
                  : "self-end rounded-tr-none bg-[#eee3] peer-data-[owner=bot]:my-2 dark:bg-neutral-700",
                messages.indexOf(message) === 1 && "rounded-tl-md",
              )}
              data-owner={message.type}
            >
              <span
                className={cn(
                  "absolute top-0 block h-[13px] w-2 rounded-b-sm",
                  message.type === "bot"
                    ? "-left-2 text-[#f1f1f1] dark:text-neutral-800"
                    : "-right-2 text-[#fcfcfc] dark:text-neutral-700",
                  messages.indexOf(message) === 1 && "hidden",
                )}
              >
                {message.type === "bot" ? <TailIn /> : <TailOut />}
              </span>
              <span>{message.text}</span>
            </div>
          ))}

          <div
            className={cn(
              "peer relative flex min-h-9 items-center self-start rounded-md rounded-tl-none bg-[#bbb3] p-2 px-[11px] text-left text-base leading-[1.4] text-black dark:bg-neutral-800 dark:text-white sm:min-h-[38px] ",
              !loading && "hidden",
            )}
            data-owner="bot"
          >
            <span
              className={cn(
                "absolute top-0 block h-[13px] w-2 rounded-b-sm ",
                "-left-2 text-[#f1f1f1] dark:text-neutral-800",
              )}
            >
              <TailIn />
            </span>
            <PulseLoader color="currentColor" margin={3} size={6} speedMultiplier={0.9} />
          </div>
        </div>
        <div className="relative">
          <motion.div
            animate={messages.length >= 5 && "animate"}
            className="absolute -top-2 left-4 z-10 flex w-full flex-wrap-reverse gap-1 pr-4"
            initial="initial"
            transition={transition}
            variants={variants}
          >
            <button
              className="rounded-md border border-border bg-background px-3 py-1.5"
              disabled={loading}
              type="button"
              onClick={() => {
                sendChatQuestion("Who are you?");
              }}
            >
              Who are you?
            </button>
            <button
              className="rounded-md border border-border bg-background px-3 py-1.5"
              disabled={loading}
              type="button"
              onClick={() => {
                sendChatQuestion("Tell me about your latest project");
              }}
            >
              Latest Project
            </button>
            <button
              className="rounded-md border border-border bg-background px-3 py-1.5"
              disabled={loading}
              type="button"
              onClick={() => {
                sendChatQuestion("Tell me about your professional experience");
              }}
            >
              Experience
            </button>
          </motion.div>
          <form
            className="relative z-30 flex items-center bg-background p-4"
            onSubmit={handleSubmit}
          >
            <GradientHr className="absolute left-0 top-0" />
            <input
              className="form__input flex-1 rounded-md rounded-r-none border px-4 py-2 text-black "
              name="question"
              placeholder="Ask me anything"
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
            <button
              aria-label="Submit question"
              className={`h-[42px] rounded-lg rounded-l-none px-4 py-2 text-white dark:text-black ${
                loading ? "bg-neutral-500 dark:bg-neutral-300" : "bg-black dark:bg-white"
              }`}
              disabled={loading}
              title="Submit question"
              type="submit"
            >
              {loading ? <Spin className="animate-spin" /> : <Plane />}
            </button>
          </form>
        </div>
      </FormContainer>
    </main>
  );
}
