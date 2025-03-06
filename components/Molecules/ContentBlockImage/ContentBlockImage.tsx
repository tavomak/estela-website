import React from 'react';
import Image from 'next/image';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import { HeroContentBlockProps } from './types';

const ContentBlockImage: React.FC<HeroContentBlockProps> = ({
  title,
  titleClass,
  subtitle,
  subtitleClass,
  content,
  contentClass,
  children,
  imageUrl,
  btnLabel,
  btnClass,
  onClick,
  rtl = true,
  brandLogoColor,
}) => (
  <article className="container items-center justify-between py-24 mx-auto lg:flex">
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
      <div className="w-3/4">
        <h1
          className={`display-font text-5xl lg:text-6xl text-balance font-normal ${titleClass}`}
        >
          {title}
        </h1>
        {subtitle && <h2 className={`mt-6 ${subtitleClass}`}>{subtitle}</h2>}
        <div className={`mt-6 ${contentClass}`}>{content}</div>
      </div>
      {btnLabel && (
        <aside className="pt-6">
          <button
            className={`text-xs font-normal tracking-widest uppercase btn btn-secondary me-4 ${btnClass}`}
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
