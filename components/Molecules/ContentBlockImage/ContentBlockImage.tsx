import React from 'react';
import Image from 'next/image';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import { HeroContentBlockProps } from './types';

const ContentBlockImage: React.FC<HeroContentBlockProps> = ({
  title,
  subtitle,
  content,
  children,
  imageUrl,
  btnLabel,
  onClick,
  rtl = true,
  titleColor = 'text-ea-amarillo',
  subtitleColor = 'text-white',
  contentColor = 'text-white',
  brandLogoColor,
}) => (
  <article className="container py-24 mx-auto lg:flex items-center justify-between">
    <div
      className={`text-white mx-auto lg:mx-0 md:w-1/2 lg:w-4/12 ${rtl ? 'order-2' : 'order-1'}`}
    >
      {children || (
        <Image
          src={imageUrl || ''}
          alt={title}
          width={750}
          height={580}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            maxHeight: '400px',
          }}
          priority
        />
      )}
    </div>

    <div className={`lg:w-1/2 space-y-6 ${rtl ? 'order-1' : 'order-2'}`}>
      {brandLogoColor && (
        <div className={`w-full max-w-56 mb-12 ${brandLogoColor}`}>
          <BrandLogoHorizontal />
        </div>
      )}
      <h1
        className={`display-font text-5xl lg:text-6xl text-balance font-semibold ${titleColor}`}
      >
        {title}
      </h1>
      {subtitle && (
        <h2 className={`font-semibold text-4xl ${subtitleColor}`}>
          {subtitle}
        </h2>
      )}
      <div className={`font-medium text-2xl ${contentColor}`}>{content}</div>
      {btnLabel && (
        <aside className="pt-6">
          <button
            className="btn btn-secondary text-xs lg:text-base text-ea-amarillo border-ea-amarillo me-4"
            onClick={onClick}
            type="button"
          >
            {btnLabel}
          </button>
        </aside>
      )}
    </div>
  </article>
);

export default ContentBlockImage;
