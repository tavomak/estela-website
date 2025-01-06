import React, { useState } from 'react';
import Image from 'next/image';
import ArrowNext from '@/components/Atoms/Svg/ArrowNext';
import { TestimonialsProps } from './types';

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

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
    <div
      className={`lg:w-1/2 space-y-8 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
    >
      <p className="font-medium text-2xl min-h-24">
        {currentTestimonial.testimonialText}
      </p>
      <p className="font-semibold text-2xl min-h-24">
        {currentTestimonial?.highlightedQuote}
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          className="rotate-180 duration-200 opacity-40 hover:opacity-100"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <ArrowNext />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonial"
          className="duration-200 opacity-40 hover:opacity-100"
        >
          <ArrowNext />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <Image
          src={currentTestimonial.image.url}
          width={90}
          height={90}
          alt={`imagen de ${currentTestimonial.projectName}`}
        />
        <span className="text-lg">
          {currentTestimonial.autorName}
          <p className="text-sm">{currentTestimonial.autorRole}</p>
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
