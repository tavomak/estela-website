import { FieldError, UseFormRegister } from 'react-hook-form';

export interface InputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'tel';
  value?: string;
  onChange?: () => void;
  name: string;
  placeholder: string;
  labelColor?: string;
  bgLabelColor?: string;
  errors?: FieldError;
  register?: UseFormRegister<any>;
  rules?: Record<string, any>;
  phone?: boolean;
  disabled?: boolean;
}
