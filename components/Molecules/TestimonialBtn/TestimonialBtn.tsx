import React from 'react';
import ArrowNext from '@/components/Atoms/Svg/ArrowNext';

const TestimonialButton: React.FC = () => (
  <div className="flex gap-4 mt-4 mr-auto">
    <button
      type="button"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-ea-verde-900 text-ea-amarillo"
      aria-label="Previous"
      onClick={() =>
        (document.querySelector('.slick-prev') as HTMLElement)?.click()
      }
    >
      <span className="rotate-180">
        <ArrowNext />
      </span>
    </button>
    <button
      type="button"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-ea-verde-900 text-ea-amarillo"
      aria-label="Next"
      onClick={() =>
        (document.querySelector('.slick-next') as HTMLElement)?.click()
      }
    >
      <ArrowNext />
    </button>
  </div>
);

export default TestimonialButton;
