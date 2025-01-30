import React, { MouseEventHandler } from 'react';

export interface HeroContentBlockProps {
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  btnLabel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  imageUrl?: string;
  rtl?: boolean;
  titleColor?: string;
  subtitleColor?: string;
  contentColor?: string;
  brandLogoColor?: string;
  leftBgColor?: string;
}
