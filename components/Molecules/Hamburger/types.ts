import React from 'react';

export interface HamburgerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
