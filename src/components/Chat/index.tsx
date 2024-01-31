'use client'

import {useEffect, useRef, useState} from 'react'

import {getChatAnswer} from './actions'
import FormContainer from '../FormContainer'
import {Plane, Spin} from '@/assets/svg'
import {AnimatePresence, motion} from 'framer-motion'
import {transition, variants} from './anim'

interface ChatProps {
  initialMessages: string[]
}

export function Chat({initialMessages}: ChatProps) {
  const [messages, setMessages] = useState<
    {
      id: string
      type: 'bot' | 'user'
      text: string
    }[]
  >(() =>
    initialMessages.length
      ? initialMessages.map((message) => ({
          id: message + Date.now(),
          type: 'bot',
          text: message,
        }))
      : []
  )
  const [question, setQuestion] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const container = useRef<HTMLDivElement>(null)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (loading) return

    setLoading(true)
    setMessages((messages) =>
      messages.concat({id: String(Date.now()), type: 'user', text: question})
    )
    setQuestion('')

    const text = await getChatAnswer(question)

    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: 'bot',
        text,
      })
    )

    setLoading(false)
  }

  async function handleClick(question: string) {
    if (loading) return

    setLoading(true)
    setMessages((messages) =>
      messages.concat({id: String(Date.now()), type: 'user', text: question})
    )
    setQuestion('')

    const text = await getChatAnswer(question)

    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: 'bot',
        text,
      })
    )

    setLoading(false)
  }

  useEffect(() => {
    container.current?.scrollTo(0, container.current.scrollHeight)
  }, [messages])

  return (
    <main>
      <FormContainer className='m-auto mt-8 flex flex-col gap-4'>
        <div
          ref={container}
          className='relative flex h-[480px] flex-col items-end justify-start gap-1 overflow-y-auto p-4'
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`min-w-0 max-w-[80%] rounded-md p-2 px-3 text-base text-black dark:text-white ${
                message.type === 'bot'
                  ? 'self-start bg-[#bbb3] text-left first:rounded-tl-none dark:bg-neutral-800'
                  : 'self-end bg-[#eee3] text-right first:rounded-tr-none dark:bg-neutral-700'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form
          className='relative flex items-center p-4 pt-0'
          onSubmit={handleSubmit}
        >
          <motion.div
            className='absolute -top-2 left-4 flex w-full flex-wrap-reverse gap-1 pr-4'
            initial='initial'
            animate={messages.length >= 5 && 'animate'}
            variants={variants}
            transition={transition}
          >
            <button
              className='rounded-md border border-border bg-background px-3 py-1.5'
              type='button'
              disabled={loading}
              onClick={() => handleClick('Who are you?')}
            >
              Who are you?
            </button>
            <button
              className='rounded-md border border-border bg-background px-3 py-1.5'
              type='button'
              disabled={loading}
              onClick={() => handleClick('Tell me about your latest project')}
            >
              Latest Project
            </button>
            <button
              className='rounded-md border border-border bg-background px-3 py-1.5'
              type='button'
              disabled={loading}
              onClick={() =>
                handleClick('Tell me about your professional experience')
              }
            >
              Experience
            </button>
          </motion.div>
          <input
            className='form__input z-10 flex-1 rounded-md rounded-r-none border px-4 py-2 text-black'
            name='question'
            placeholder='Ask me anything'
            type='text'
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <button
            className={`h-[42px] rounded-lg rounded-l-none px-4 py-2 text-white dark:text-black ${
              loading
                ? 'bg-neutral-500 dark:bg-neutral-300'
                : 'bg-black dark:bg-white'
            }`}
            disabled={loading}
            type='submit'
            aria-label='Submit question'
            title='Submit question'
          >
            {loading ? <Spin className='animate-spin' /> : <Plane />}
          </button>
        </form>
      </FormContainer>
    </main>
  )
}
