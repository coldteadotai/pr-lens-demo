import type { Order } from "./orders";

const orders: Order[] = [];

export function readAll(): Order[] {
  return [...orders];
}

export function write(order: Order): void {
  orders.push(order);
}
