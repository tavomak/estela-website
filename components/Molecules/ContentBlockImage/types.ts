import React, { MouseEventHandler } from 'react';

export interface HeroContentBlockProps {
  title: string;
  titleClass: string;
  subtitle: string;
  subtitleClass: string;
  content: React.ReactNode;
  contentClass?: string;
  btnLabel?: string;
  btnClass?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  imageUrl?: string;
  rtl?: boolean;
  brandLogoColor?: string;
  leftBgColor?: string;
}
