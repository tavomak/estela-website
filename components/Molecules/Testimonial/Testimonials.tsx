import React, { useState } from 'react';
import Image from 'next/image';
import ArrowNext from '@/components/Atoms/Svg/ArrowNext';
import { TestimonialsProps } from './types';

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const colorSchemes = {
    0: { bg: '#8EEBD3', accent: '#00A77D' },
    1: { bg: '#F7FFBF', accent: '#B5BF6F' },
    2: { bg: '#ECEDEE', accent: '#AAACAE' },
  };

  const getBackgroundColor = (index: number) => {
    const colorPattern = index % 3;
    return (
      colorSchemes[colorPattern as keyof typeof colorSchemes] || colorSchemes[0]
    );
  };

  const colors = getBackgroundColor(currentIndex);
  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(false);
    }, 500);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setFade(false);
    }, 500);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <aside>
      <article className="py-8 lg:py-12 lg:px-8">
        <div
          className={`w-full relative h-full transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
        >
          <div
            className="absolute w-full h-full translate-x-3 translate-y-3"
            style={{ backgroundColor: colors.accent }}
          />

          <div
            className="relative z-10 p-8 md:p-12 "
            style={{ backgroundColor: colors.bg }}
          >
            <div className="relative z-20 max-w-2xl text-ea-verde-900">
              <p className="mb-6 text-xs font-medium md:text-3xl">
                {currentTestimonial.testimonialText}
              </p>

              <p className="text-xs font-semibold md:text-3xl">
                {currentTestimonial?.highlightedQuote}
              </p>
            </div>
          </div>
        </div>
      </article>
      <div className="items-center md:flex">
        <div className="items-center hidden gap-2 p-4 md:flex md:gap-4">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 text-xs bg-gray-200 rounded-full text-verde-oscuro-200"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <span className="rotate-180">
              <ArrowNext />
            </span>
          </button>

          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 text-xs rounded-full bg-ea-verde-900 text-ea-amarillo"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ArrowNext />
          </button>
        </div>
        <div className="flex items-center">
          <div className="w-20 h-20 overflow-hidden rounded-full">
            {currentTestimonial.image?.url && (
              <Image
                src={currentTestimonial.image.url || '/placeholder.svg'}
                width={64}
                height={64}
                alt={`Imagen de ${currentTestimonial.autorName}`}
                className="object-cover w-full h-full"
              />
            )}
          </div>

          <div className="px-4 text-verde-oscuro-500">
            <h3 className="text-base font-medium md:text-3xl">
              {currentTestimonial.autorName}
            </h3>
            <p className="font-semibold text-gray-700 text-xxs md:text-lg">
              {currentTestimonial.autorRole}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 md:hidden md:gap-4">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 text-xs bg-gray-200 rounded-full text-verde-oscuro-200"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <span className="rotate-180">
              <ArrowNext />
            </span>
          </button>

          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 text-xs rounded-full bg-ea-verde-900 text-ea-amarillo"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ArrowNext />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Testimonials;
