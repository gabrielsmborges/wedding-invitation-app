import { create } from "zustand";

type State = {
    groupCode: string;
    users: {
        id: string;
        name: string;
    }[];
}

type Actions = {
    setGroupCode: (groupCode: State['groupCode']) => void;
    setUsers: (users: State['users']) => void;
}

export const useStore = create<State & Actions>((set) => ({
    groupCode: '',
    setGroupCode: (groupCode) => set({ groupCode }),
    users: [],
    setUsers: (users) => set({ users }),
  }))