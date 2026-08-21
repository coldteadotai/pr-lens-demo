import { recordOrderCreated } from "./audit";
import { readAll, write } from "./store";

export type Order = {
  id: string;
  item: string;
  quantity: number;
};

export function listOrders(): Order[] {
  return readAll();
}

export function createOrder(body: unknown): Order {
  const draft = body as Partial<Order>;
  const order: Order = {
    id: `ord_${readAll().length + 1}`,
    item: draft.item ?? "unknown",
    quantity: draft.quantity ?? 1,
  };
  write(order);
  recordOrderCreated(order.id);
  return order;
}
