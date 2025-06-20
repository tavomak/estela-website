import { ReactNode } from 'react';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  isFullWidth?: boolean;
  children?: ReactNode;
}
