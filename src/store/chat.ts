import {create} from "zustand";

interface Message {
  id: string;
  type: "bot" | "user";
  text: string;
}

interface ChatState {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
}

export const useChatStore = create<ChatState>()((set) => ({
  messages: [],
  setMessages: (messages) => set({messages}),
  addMessage: (message) => set((state) => ({messages: [...state.messages, message]})),
}));
