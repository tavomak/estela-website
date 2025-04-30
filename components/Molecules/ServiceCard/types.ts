import React from 'react';

export interface ServiceCardProps {
  title: React.ReactNode;
  containerClass?: string;
  description: string | string[];
  bgColor: string;
  accentColor: string;
  textColor?: string;
  buttonText?: string;
}
