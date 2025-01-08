import create from "zustand";

export const useStore = create((set) => ({
  auth: {
    email: "",
  },
  setAuth: (email) => set((state) => ({ auth: { ...state.auth, email } })),
}));
