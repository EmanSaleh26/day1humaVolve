import { api } from "./axios";
import type { User } from "../types/user.types";

export const usersApi = {
  getAll: () => api.get<User[]>("/users"),
  getById: (id: string) => api.get<User>(`/users/${id}`),
  create: (data: Omit<User, "id">) => api.post<User>("/users", data),
};
