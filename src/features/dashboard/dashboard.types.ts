import { ReactNode } from 'react';

export interface QuickAction {
  key: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface StatItem {
  key: string;
  title: string;
  value: number;
}

