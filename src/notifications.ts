import type { Order } from "./orders";

export function notifyOrderCreated(order: Order): void {
  // Delivery is a console stub in the demo; the shape is what matters.
  console.log(`order ${order.id}: ${order.quantity} × ${order.item}`);
}
