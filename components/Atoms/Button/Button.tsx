import { FC } from 'react';
import Spinner from '@/components/Atoms/Spinner';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
  children,
  loading,
  loadingType,
  text,
  className,
  submit,
  onClick,
  disabled,
}) => (
  <button
    className={`${className} flex align-center gap-2 disabled:opacity-70`}
    type={submit ? 'submit' : 'button'}
    onClick={onClick}
    disabled={loading || disabled}
  >
    {loading && <Spinner type={loadingType as 'dots' | 'loader'} />}
    {children || text}
  </button>
);

export default Button;
