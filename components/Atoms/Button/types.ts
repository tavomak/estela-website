import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  loading?: boolean;
  loadingType?: 'dots' | 'loader';
  text?: string;
  className?: string;
  submit?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}
