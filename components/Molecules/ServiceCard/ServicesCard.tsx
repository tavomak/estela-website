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
  buttonText,
  containerClass,
}) => {
  const { t } = useTranslation('common');
  const isArray = Array.isArray(description);

  return (
    <div className="relative w-full h-full lg:max-w-96">
      <div
        className="absolute w-full h-full translate-x-3 translate-y-3"
        style={{ backgroundColor: accentColor }}
      />

      <div
        className={`relative flex flex-col w-full h-full p-8 ${containerClass}`}
        style={{ backgroundColor: bgColor }}
      >
        <h2
          className="w-full mb-2 text-2xl font-medium md:mb-4 md:text-5xl display-font"
          style={{ color: textColor }}
        >
          {title}
        </h2>
        <div
          className={`${isArray ? 'w-full' : 'w-1/2'} h-px mb-6`}
          style={{ backgroundColor: textColor }}
        />
        {isArray ? (
          <ul
            className="w-5/6 mx-auto text-xs list-disc md:text-lg"
            style={{ color: textColor }}
          >
            {description.map((content) => (
              <li key={content}>{content}</li>
            ))}
          </ul>
        ) : (
          <p
            className="flex-grow mb-4 text-xs font-normal lg:mb-10 md:text-lg"
            style={{ color: textColor }}
          >
            {t(description)}
          </p>
        )}

        {buttonText && (
          <div className="flex items-center gap-2 mt-2 ml-auto lg:ml-0 md:mt-8">
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
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
