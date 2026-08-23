export type AuditEntry = {
  at: string;
  action: "order_created";
  orderId: string;
};

const entries: AuditEntry[] = [];

export function recordOrderCreated(orderId: string): void {
  entries.push({ at: new Date().toISOString(), action: "order_created", orderId });
}

export function auditTrail(): AuditEntry[] {
  return [...entries];
}
