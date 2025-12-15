import { OrderStatusKey } from '../../constants/orderStatus';

export interface OrderRow {
  key: string;
  patient: string;
  product: string;
  orderedDate: string;
  shipDate: string;
  soNumber: string;
  poNumber: string;
  orderedBy: string;
  status: 'Received' | 'Processed' | 'Production' | 'Drafted' | 'On Hold';
  statusKey: OrderStatusKey;
}


