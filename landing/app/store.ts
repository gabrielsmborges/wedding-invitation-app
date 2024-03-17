import { create } from "zustand";

type State = {
    groupCode: string;
    users: {
        id: string;
        name: string;
        confirmed: boolean;
    }[];
    language: "PT" | "EN";
}

type Actions = {
    setGroupCode: (groupCode: State['groupCode']) => void;
    setUsers: (users: State['users']) => void;
    setLanguage: (language: State['language']) => void;
}

export const useStore = create<State & Actions>((set) => ({
    groupCode: '',
    setGroupCode: (groupCode) => set({ groupCode }),
    users: [],
    setUsers: (users) => set({ users }),
    language: 'PT',
    setLanguage: (language) => set({ language }),
  }))