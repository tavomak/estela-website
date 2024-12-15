import { CSSProperties } from 'react';

export interface SpinnerProps {
  width?: string;
  height?: string;
  type?: 'dots' | 'loader';
  style?: CSSProperties;
}
