import { FC } from 'react';
import { HamburgerProps } from './types';

const Hamburger: FC<HamburgerProps> = ({ open = false, setOpen }) => (
  <button
    type="button"
    className={`${open ? 'right-2 sm:right-6 top-2' : ''} h-14 w-14 z-20`}
    aria-label="Menu"
    onClick={() => setOpen(!open)}
  >
    <div className="relative grid gap-1 justify-items-center">
      <span
        className={`h-1 w-8 rounded-full bg-ea-verde transition ${open && 'absolute top-1/2 left-1/2 rotate-45 -translate-y-1/2 -translate-x-1/2'} `}
      />
      <span
        className={`h-1 w-8 rounded-full bg-ea-verde transition ${open && 'scale-x-0'}`}
      />
      <span
        className={`h-1 w-8 rounded-full bg-ea-verde ${open && 'absolute top-1/2 left-1/2 -rotate-45 -translate-y-1/2 -translate-x-1/2'}`}
      />
    </div>
  </button>
);

export default Hamburger;
