import {create} from 'zustand'
import {persist} from 'zustand/middleware'

interface Message {
  id: string
  type: 'bot' | 'user'
  text: string
}

interface ChatState {
  messages: Message[]
  setMessages: (messages: Message[]) => void
  addMessage: (message: Message) => void
}

// {
//   id: '777',
//   type: 'bot',
//   text: "Hey, I'm jeresc.",
// },
// {
//   id: '999',
//   type: 'bot',
//   text: 'How can I help you?',
// },

export const useChatStore = create<ChatState>()((set) => ({
  messages: [],
  setMessages: (messages) => set({messages}),
  addMessage: (message) =>
    set((state) => ({messages: [...state.messages, message]})),
}))
