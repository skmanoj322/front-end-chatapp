import { Request } from "../api";

export const Api = new Request(
  (import.meta.env.VITE_BASEURL = "http://localhost:3000")
);
