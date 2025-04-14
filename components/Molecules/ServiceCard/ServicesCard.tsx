import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import DiagonalArrow from '@/components/Atoms/Svg/DiagonalArrow';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  bgColor,
  accentColor,
  textColor = '#005E49',
  buttonText = 'saber más',
}) => {
  const { t } = useTranslation('common');
  // const isArray = Array.isArray(description);

  return (
    <div className="relative w-full h-full lg:max-w-[340px]">
      <div
        className="absolute w-full h-full translate-x-3 translate-y-3"
        style={{ backgroundColor: accentColor }}
      />

      <div
        className="relative flex flex-col w-full h-full p-8 pb-16"
        style={{ backgroundColor: bgColor }}
      >
        <h2
          className="mb-2 text-2xl font-medium md:mb-4 md:text-5xl display-font"
          style={{ color: textColor }}
        >
          {t(title)}
        </h2>
        <div
          className="w-1/2 h-px mb-6"
          style={{ backgroundColor: textColor }}
        />
        <div
          className="flex-grow mb-4 text-xs font-medium lg:mb-10 md:text-lg"
          style={{ color: textColor }}
        >
          {t(description)}
        </div>

        <div className="absolute flex items-center gap-2 order bottom-8 right-8 lg:left-8">
          <span
            className="order-2 text-xs font-semibold lowercase lg:order-1 lg:uppercase lg:text-sm lg:font-medium"
            style={{ color: textColor }}
          >
            {t(buttonText)}
          </span>
          <button
            type="button"
            className="flex items-center justify-center order-1 w-8 h-8 text-xs rounded-full md:text-sm lg:order-2 bg-ea-verde-900 text-ea-amarillo"
            aria-label={t(buttonText)}
          >
            <DiagonalArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
