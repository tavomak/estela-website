import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import DiagonalArrow from '@/components/Atoms/Svg/DiagonalArrow';
import splitTitleInTwoLines from '@/utils/helpers';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({
  textColor = '#005E49',
  buttonText,
  containerClass,
  service: { title, content, bgColor, accentColor },
}) => {
  const { t } = useTranslation('common');
  const { firstLine, secondLine } = splitTitleInTwoLines(title);

  return (
    <div className="relative w-full h-full lg:min-w-80 lg:max-w-96">
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
          <div className="hidden lg:inline">
            <span> {firstLine}</span>
            <br />
            <span>{secondLine}</span>
          </div>
          <span className="inline lg:hidden">{title}</span>
        </h2>

        <div
          className={`${content.length > 1 ? 'w-full' : 'w-1/2'} h-px mb-6`}
          style={{ backgroundColor: textColor }}
        />

        {content.length > 1 ? (
          <ul
            className="w-5/6 mx-auto text-xs list-disc md:text-lg"
            style={{ color: textColor }}
          >
            {content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p
            className="flex-grow mb-4 text-xs font-normal lg:mb-10 md:text-lg"
            style={{ color: textColor }}
          >
            {content}
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
