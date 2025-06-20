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
  <>
    <div className={`w-full my-auto space-y-4 ${rtl ? 'order-1' : 'order-2'}`}>
      {brandLogoColor && (
        <div className={`w-full max-w-56 ${brandLogoColor}`}>
          <BrandLogoHorizontal />
        </div>
      )}
      <div className="space-y-4 w-full md:space-y-8">
        <h1 className={`text-4xl display-font lg:text-6xl ${titleClass}`}>
          {title}
        </h1>
        {subtitle && <h2 className={`${subtitleClass}`}>{subtitle}</h2>}
        <div className={`${contentClass}`}>{content}</div>
      </div>
      {btnLabel && (
        <aside className="flex pt-6">
          <a
            className={`text-sm font-medium tracking-widest uppercase btn btn-secondary me-4 ${btnClass}`}
            onClick={
              onClick
                ? (e) => {
                    e.preventDefault();
                    onClick(e);
                  }
                : undefined
            }
            type="button"
            href="!#"
          >
            {btnLabel}
          </a>
        </aside>
      )}
    </div>
    <div
      className={`relative text-white md:p-4 mx-auto w-full ${rtl ? 'order-2' : 'order-1'}`}
    >
      <div className="w-full">
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
    </div>
  </>
);

export default ContentBlockImage;
