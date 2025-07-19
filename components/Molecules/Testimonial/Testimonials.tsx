import React from 'react';
import Image from 'next/image';
import { Testimonial } from './types';

const TestimonialCard: React.FC<Testimonial> = ({
  testimonialText,
  highlightedQuote,
  image,
  autorName,
  autorRole,
  bgColor,
  accentColor,
}) => (
  <article className='items-center w-11/12 gap-12 mx-auto md:w-full'>
    <div className='relative w-5/6 h-full'>
      <div
        className='absolute w-full h-full translate-x-3 translate-y-3'
        style={{ backgroundColor: accentColor }}
      />
      <div className='relative z-10 p-8 md:p-20' style={{ backgroundColor: bgColor }}>
        <div className='relative z-20 max-w-4xl text-ea-verde-900'>
          <p className='mb-6 text-xs font-normal md:font-light md:text-3xl'>{testimonialText}</p>

          {highlightedQuote && (
            <p className='text-xs font-normal md:font-medium md:text-3xl'>{highlightedQuote}</p>
          )}
        </div>
      </div>
    </div>

    <div className='items-center md:flex'>
      <div className='flex items-center mt-8'>
        <div className='w-20 h-20 overflow-hidden rounded-full'>
          {image && (
            <Image
              src={image.url || '/placeholder.svg'}
              width={64}
              height={64}
              alt={`Imagen de ${autorName}`}
              className='object-cover w-full h-full'
            />
          )}
        </div>

        <div className='px-4 text-verde-oscuro-500'>
          <h3 className='text-base font-light md:text-3xl'>{autorName}</h3>
          <p className='font-normal text-gray-700 text-xxs md:text-lg'>{autorRole}</p>
        </div>
      </div>
    </div>
  </article>
);

export default TestimonialCard;
