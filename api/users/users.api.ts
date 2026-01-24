import { api } from "../http";

export const usersApi = {
  getAll: () => api.get("/users"),
  create: (data: unknown) => api.post("/users", data),
}
