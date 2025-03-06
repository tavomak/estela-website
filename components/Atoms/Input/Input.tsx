import { useState, FC } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import { contactCountries, contactMasks } from '@/utils';
import { InputProps } from './types';

const Input: FC<InputProps> = ({
  type,
  value,
  onChange,
  name,
  placeholder,
  errors,
  register,
  rules,
  phone,
  disabled,
  bgLabelColor,
  labelColor,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputComponent = () => {
    if (register) {
      return (
        <input
          className="w-full p-2 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0"
          type={showPassword ? 'text' : type}
          id={name}
          placeholder={placeholder}
          {...register(name, { ...rules })}
          disabled={disabled}
        />
      );
    }
    return (
      <input
        className="w-full p-2 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0"
        type={showPassword ? 'text' : type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value?.trim()}
        onChange={onChange}
        disabled={disabled}
      />
    );
  };

  return (
    <div className={phone ? 'flex items-center justify-stretch' : ''}>
      <label
        htmlFor={name}
        className={`w-full  ${errors ? 'border-red-500' : ''} relative my-4 block border ${labelColor || 'border-gray-200'} shadow-sm focus-within:border-dark-blue focus-within:ring-1 focus-within:dark-blue`}
      >
        {phone ? (
          <PhoneInput
            country="cl"
            onChange={onChange}
            value={value}
            onlyCountries={contactCountries}
            placeholder={placeholder}
            masks={contactMasks}
            inputProps={{
              name,
              required: true,
            }}
          />
        ) : (
          inputComponent()
        )}

        {type === 'password' && (
          <button
            className="absolute inset-y-0 grid w-10 cursor-pointer end-0 place-content-center"
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}

        {!phone && (
          <span
            className={`absolute  start-2.5 top-0 -translate-y-1/2 peer-focus:${bgLabelColor || 'bg-white'}  peer-focus:text-dark-blue px-2 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-full`}
          >
            {placeholder}
          </span>
        )}

        {errors && (
          <span className="absolute bottom-0 end-2.5 -translate-y-1/2 bg-white p-0.5 text-xs text-red-600 transition-all">
            {errors.message}
          </span>
        )}
      </label>
    </div>
  );
};

export default Input;
