import React from 'react';
import Image from 'next/image';
import BrandLogoHorizontal from '@/components/Atoms/Svg/BrandLogoHorizontal';
import { HeroContentBlockProps } from './types';
import FadeIn from '@/components/Atoms/FadeIn';

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
  <>
    <div className={`w-full my-auto space-y-4 ${rtl ? 'order-1' : 'order-2'}`}>
      {brandLogoColor && (
        <FadeIn className={`w-full max-w-56 ${brandLogoColor}`}>
          <BrandLogoHorizontal />
        </FadeIn>
      )}
      <FadeIn className='space-y-4 w-full md:space-y-8'>
        <h2 className={`text-4xl display-font lg:text-6xl ${titleClass}`}>{title}</h2>
        {subtitle && <h3 className={`${subtitleClass}`}>{subtitle}</h3>}
        <div className={`${contentClass}`}>{content}</div>
      </FadeIn>
      {btnLabel && (
        <FadeIn as='aside' className='flex pt-6'>
          <button className={`${btnClass || 'btn btn-primary'}`} onClick={onClick} type='button'>
            {btnLabel}
          </button>
        </FadeIn>
      )}
    </div>
    <div className={`text-white w-full ${rtl ? 'order-2' : 'order-1'}`}>
      {children ||
        (imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={750}
            height={580}
            style={{
              width: '90%',
              marginLeft: 'auto',
              height: 'auto',
              objectFit: 'contain',
              maxHeight: '400px',
            }}
            priority
          />
        ) : null)}
    </div>
  </>
);

export default ContentBlockImage;
