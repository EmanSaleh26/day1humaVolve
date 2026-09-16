import { create } from "zustand";

interface AuthState {
  user: string | null;
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (username) => set({ user: username, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
