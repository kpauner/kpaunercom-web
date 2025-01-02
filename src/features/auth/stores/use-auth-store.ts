import { create } from "zustand";
import pb from "@/lib/pocketbase";
import { User } from "@/features/auth/types/auth.types";

export type AuthStore = {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  initialize: () => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  initialize: async () => {
    try {
      if (pb.authStore.isValid && pb.authStore.model?.id) {
        const user = await pb
          .collection("users")
          .getOne<User>(pb.authStore.model?.id);
        set({ user, isLoading: false });
      } else {
        set({ user: null, isLoading: false });
      }
    } catch {
      set({ user: null, isLoading: false });
    }
  },
  logout: () => {
    pb.authStore.clear();
    set({ user: null });
  },
}));
