import React from 'react';
import Image from 'next/image';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import { HeroContentBlockProps } from './types';

const HeroContentBlock: React.FC<HeroContentBlockProps> = ({
  title,
  subtitle,
  content,
  children,
  imageUrl,
  btnLabel,
  onClick,
  rtl = true,
}) => (
  <article className="container py-12 mx-auto lg:flex items-center justify-between">
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
      <div className="text-ea-verde w-full max-w-56 mb-12">
        <BrandLogoHorizontal />
      </div>
      <h1 className="display-font text-5xl lg:text-6xl text-balance font-semibold text-ea-amarillo">
        {title}
      </h1>
      <h2 className="font-medium text-2xl text-white">{subtitle}</h2>
      <p className="text-white text-4xl font-semibold">{content}</p>
      <aside className="pt-12">
        <button
          className="btn btn-secondary text-xs lg:text-base text-ea-amarillo border-ea-amarillo me-4"
          onClick={onClick}
          type="button"
        >
          {btnLabel}
        </button>
      </aside>
    </div>
  </article>
);

export default HeroContentBlock;
