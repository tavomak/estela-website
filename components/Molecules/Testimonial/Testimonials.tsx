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
      <article className="items-center gap-12 py-8 lg:flex">
        <button
          type="button"
          className="items-center justify-center hidden w-10 h-10 text-xs bg-gray-200 rounded-full lg:flex text-verde-oscuro-200"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <span className="rotate-180">
            <ArrowNext />
          </span>
        </button>
        <div
          className={`w-11/12 lg:w-2/3 relative h-full transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
        >
          <div
            className="absolute w-full h-full translate-x-3 translate-y-3"
            style={{ backgroundColor: colors.accent }}
          />

          <div
            className="relative z-10 p-8 md:p-20"
            style={{ backgroundColor: colors.bg }}
          >
            <div className="relative z-20 max-w-3xl text-ea-verde-900">
              <p className="mb-6 text-xs font-normal md:font-light md:text-3xl">
                {currentTestimonial.testimonialText}
              </p>

              <p className="text-xs font-normal md:font-medium md:text-3xl">
                {currentTestimonial?.highlightedQuote}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="items-center justify-center hidden w-10 h-10 text-xs rounded-full lg:flex bg-ea-verde-900 text-ea-amarillo"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <ArrowNext />
        </button>
      </article>
      <div className="items-center md:flex">
        <div className="flex items-center lg:pl-20">
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
            <h3 className="text-base font-light md:text-3xl">
              {currentTestimonial.autorName}
            </h3>
            <p className="font-normal text-gray-700 text-xxs md:text-lg">
              {currentTestimonial.autorRole}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-around gap-2 mt-6 md:mt-0 md:hidden md:gap-4">
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
