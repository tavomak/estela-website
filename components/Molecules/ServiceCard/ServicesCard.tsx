import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import DiagonalArrow from '@/components/Atoms/Svg/DiagonalArrow';
import splitTitleInTwoLines from '@/utils/helpers';
import Button from '@/components/Atoms/Button';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({
  buttonText = 'learn_more',
  containerClass,
  service: { title, content, bgColor, accentColor },
  onClick,
}) => {
  const { t } = useTranslation('common');
  const { firstLine, secondLine } = splitTitleInTwoLines(title);

  return (
    <div className='w-full h-full text-ea-verde-oscuro-500'>
      <div
        className={`flex flex-col p-8 w-full h-full ${containerClass}`}
        style={{
          backgroundColor: bgColor,
          boxShadow: `10px 10px 0 0 ${accentColor}`,
        }}
      >
        <h2 className='mb-2 w-full text-2xl font-medium md:mb-4 md:text-5xl display-font'>
          <div className='hidden lg:inline'>
            <span> {firstLine}</span>
            <br />
            <span>{secondLine}</span>
          </div>
          <span className='inline lg:hidden'>{title}</span>
        </h2>

        <div className={`${content.length > 1 ? 'w-full' : 'w-1/2'} h-px mb-6`} />

        {content.length > 1 ? (
          <ul className='mx-auto mb-4 w-5/6 text-xs list-disc md:text-lg'>
            {content.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className='flex-grow mb-14 text-xs font-normal lg:mb-10 md:text-lg'>{content}</p>
        )}

        {buttonText && (
          <Button
            onClick={onClick}
            className='flex gap-2 items-center mt-auto cursor-pointer group'
          >
            <span className='text-xs font-normal lowercase lg:uppercase lg:text-sm lg:font-medium group-hover:text-ea-verde-500'>
              {t(buttonText)}
            </span>
            <span
              className='flex justify-center items-center text-xs rounded-full size-7 md:size-9 md:text-sm bg-ea-verde-900 text-ea-amarillo group-hover:bg-ea-verde-500 group-hover:text-ea-verde-900'
              aria-label={t(buttonText)}
            >
              <DiagonalArrow />
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
