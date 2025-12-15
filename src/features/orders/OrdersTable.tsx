import React, { useMemo } from 'react';
import { Dropdown, Grid, MenuProps } from 'antd';
import { EditOutlined, EyeOutlined, MoreOutlined } from '@ant-design/icons';
import AppTable from '../../components/common/AppTable';
import AppTag from '../../components/common/AppTag';
import { OrderRow } from './orders.types';

type OrdersTableProps = {
  data: OrderRow[];
};

const statusColor: Record<OrderRow['status'], string> = {
  Received: '#4a90e2',
  Processed: '#44b96b',
  Production: '#f59a23',
  Drafted: '#bfbfbf',
  'On Hold': '#fa8c16',
};

const OrdersTable: React.FC<OrdersTableProps> = ({ data }) => {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;
  const isTablet = screens.md && !screens.lg;

  const columns = useMemo(
    () => [
      {
        title: 'Patient',
        dataIndex: 'patient',
        key: 'patient',
        fixed: 'left' as const,
        render: (_: string, record: OrderRow) => (
          <div className="patient-cell">
            <div className="patient-name">{record.patient}</div>
            <AppTag color="#e5f1ff">{record.product}</AppTag>
          </div>
        ),
      },
      {
        title: 'Ordered Date',
        dataIndex: 'orderedDate',
        key: 'orderedDate',
        sorter: (a: OrderRow, b: OrderRow) =>
          new Date(a.orderedDate).getTime() - new Date(b.orderedDate).getTime(),
      },
      {
        title: 'Ship Date',
        dataIndex: 'shipDate',
        key: 'shipDate',
        sorter: (a: OrderRow, b: OrderRow) =>
          new Date(a.shipDate).getTime() - new Date(b.shipDate).getTime(),
      },
      {
        title: 'SO Number',
        dataIndex: 'soNumber',
        key: 'soNumber',
        responsive: ['lg'] as const,
      },
      {
        title: 'PO #',
        dataIndex: 'poNumber',
        key: 'poNumber',
        responsive: ['lg'] as const,
      },
      {
        title: 'Ordered By',
        dataIndex: 'orderedBy',
        key: 'orderedBy',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (value: OrderRow['status']) => (
          <AppTag color={statusColor[value]}>{value}</AppTag>
        ),
      },
      {
        title: 'Actions',
        key: 'actions',
        align: 'center' as const,
        render: () => {
          const inline = (
            <div className="action-icons">
              <EyeOutlined />
              <EditOutlined />
            </div>
          );

          if (isTablet) {
            const items: MenuProps['items'] = [
              { key: 'view', label: 'View', icon: <EyeOutlined /> },
              { key: 'edit', label: 'Edit', icon: <EditOutlined /> },
            ];
            return (
              <Dropdown menu={{ items }}>
                <MoreOutlined className="action-trigger" />
              </Dropdown>
            );
          }

          return inline;
        },
      },
    ],
    [isTablet]
  );

  if (isMobile) {
    return (
      <div className="orders-cards">
        {data.map((order) => (
          <div className="order-card" key={order.key}>
            <div className="order-card-row">
              <div className="patient-name">{order.patient}</div>
              <AppTag color={statusColor[order.status]}>{order.status}</AppTag>
            </div>
            <div className="order-card-row meta">
              <span>{order.product}</span>
              <span>{order.orderedBy}</span>
            </div>
            <div className="order-card-row meta">
              <span>Ordered: {order.orderedDate}</span>
              <span>Ship: {order.shipDate}</span>
            </div>
            <div className="order-card-row meta">
              <span>SO: {order.soNumber}</span>
              <span>PO: {order.poNumber}</span>
            </div>
            <div className="order-card-actions">
              <EyeOutlined />
              <EditOutlined />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <AppTable<OrderRow>
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 25 }}
      rowClassName={() => 'orders-row'}
      sticky
    />
  );
};

export default OrdersTable;


