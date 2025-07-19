import React from 'react';
import ArrowNext from '@/components/Atoms/Svg/ArrowNext';

interface Props {
  sliderId: string;
}

const SliderArrow: React.FC<Props> = ({ sliderId }) => (
  <>
    <button
      type='button'
      className='btnArrow'
      aria-label='Previous'
      onClick={() => (document.querySelector(`#${sliderId} .slick-prev`) as HTMLElement)?.click()}
    >
      <span className='rotate-180'>
        <ArrowNext />
      </span>
    </button>
    <button
      type='button'
      className='btnArrow'
      aria-label='Next'
      onClick={() => (document.querySelector(`#${sliderId} .slick-next`) as HTMLElement)?.click()}
    >
      <ArrowNext />
    </button>
  </>
);

export default SliderArrow;
