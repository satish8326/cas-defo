import React from 'react';
import { Table, TableProps } from 'antd';

type AppTableProps<RecordType> = TableProps<RecordType>;

const AppTable = <T extends object>(props: AppTableProps<T>) => (
  <Table<T>
    pagination={{ position: ['bottomRight'], ...props.pagination }}
    scroll={{ x: 1000, ...props.scroll }}
    sticky
    {...props}
  />
);

export default AppTable;


