import { FC } from 'react';
import { HamburgerProps } from './types';

const Hamburger: FC<HamburgerProps> = ({ open = false, setOpen }) => (
  <button
    type="button"
    className="z-10 flex items-center justify-center size-6"
    aria-label="Menu"
    onClick={() => setOpen(!open)}
  >
    <div className="flex flex-col items-center justify-center w-full h-full gap-1">
      <span className="w-7 h-[3px] rounded-full bg-ea-verde" />
      <span className="h-[3px] w-7 rounded-full bg-ea-verde translate-x-1.5" />
      <span className="w-7 h-[3px] rounded-full bg-ea-verde" />
    </div>
  </button>
);

export default Hamburger;
