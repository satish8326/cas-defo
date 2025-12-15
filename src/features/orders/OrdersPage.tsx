import React, { useMemo, useState } from 'react';
import { Grid } from 'antd';
import AppButton from '../../components/common/AppButton';
import OrderStatusTabs from '../../components/filters/OrderStatusTabs';
import OrdersTable from './OrdersTable';
import { ordersMock } from './orders.mock';
import { OrderStatusKey } from '../../constants/orderStatus';

const OrdersPage: React.FC = () => {
  const [status, setStatus] = useState<OrderStatusKey>('all');
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  const filtered = useMemo(() => {
    if (status === 'all') return ordersMock;
    return ordersMock.filter((o) => o.statusKey === status);
  }, [status]);

  return (
    <div className="orders-page">
      <div className="orders-header">
        <div className="orders-header-left">
          <h2 className="orders-title">Orders</h2>
          {!isMobile && (
            <OrderStatusTabs activeKey={status} onChange={setStatus} />
          )}
        </div>
        <div className="orders-header-actions">
          {isMobile && (
            <select
              className="mobile-status-select"
              value={status}
              onChange={(e) => setStatus(e.target.value as OrderStatusKey)}
            >
              <option value="all">All (120)</option>
              <option value="drafted">Drafted (10)</option>
              <option value="on_hold">On Hold (10)</option>
              <option value="awaiting_cost">Awaiting Cost (5)</option>
              <option value="received">Received (20)</option>
              <option value="production">Production (5)</option>
              <option value="shipped">Shipped (10)</option>
            </select>
          )}
          <AppButton type="primary">New Order</AppButton>
        </div>
      </div>

      <OrdersTable data={filtered} />
    </div>
  );
};

export default OrdersPage;


