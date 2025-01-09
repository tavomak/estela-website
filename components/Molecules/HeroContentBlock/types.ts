import React, { MouseEventHandler } from 'react';

export interface HeroContentBlockProps {
  title: string;
  subtitle: string;
  content: string;
  btnLabel: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  imageUrl?: string;
  rtl?: boolean;
}
