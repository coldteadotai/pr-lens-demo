import { createOrder, listOrders } from "./orders";

type Route = {
  method: "GET" | "POST";
  path: string;
  handle: (body: unknown) => unknown;
};

export const routes: Route[] = [
  { method: "GET", path: "/orders", handle: () => listOrders() },
  { method: "POST", path: "/orders", handle: (body) => createOrder(body) },
];
