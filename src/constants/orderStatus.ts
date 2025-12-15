export type OrderStatusKey =
  | 'all'
  | 'drafted'
  | 'on_hold'
  | 'awaiting_cost'
  | 'received'
  | 'production'
  | 'shipped';

export interface OrderStatusMeta {
  key: OrderStatusKey;
  label: string;
  count: number;
}

export const ORDER_STATUS: OrderStatusMeta[] = [
  { key: 'all', label: 'All', count: 120 },
  { key: 'drafted', label: 'Drafted', count: 10 },
  { key: 'on_hold', label: 'On Hold', count: 10 },
  { key: 'awaiting_cost', label: 'Awaiting Cost', count: 5 },
  { key: 'received', label: 'Received', count: 20 },
  { key: 'production', label: 'Production', count: 5 },
  { key: 'shipped', label: 'Shipped', count: 10 },
];

export default ORDER_STATUS;

