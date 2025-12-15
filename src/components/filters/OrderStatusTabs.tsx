import React from 'react';
import { Tabs } from 'antd';
import ORDER_STATUS, { OrderStatusKey, OrderStatusMeta } from '../../constants/orderStatus';

type OrderStatusTabsProps = {
  activeKey: OrderStatusKey;
  onChange: (key: OrderStatusKey) => void;
};

const OrderStatusTabs: React.FC<OrderStatusTabsProps> = ({ activeKey, onChange }) => {
  const items = ORDER_STATUS.map((status: OrderStatusMeta) => ({
    key: status.key,
    label: (
      <span className="status-tab">
        {status.label} <span className="status-count">{status.count}</span>
      </span>
    ),
  }));

  return (
    <Tabs
      className="order-status-tabs"
      activeKey={activeKey}
      onChange={(key) => onChange(key as OrderStatusKey)}
      items={items}
    />
  );
};

export default OrderStatusTabs;


