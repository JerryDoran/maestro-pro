import { cn } from '@/lib/utils';
import React from 'react';
type TextAreaProps = {
  register: any;
  errors: any;
  label: string;
  name: string;
  helperText?: string;
  placeholder?: string;
};
export default function TextArea({
  register,
  errors,
  label,
  name,
  helperText = '',
  placeholder,
}: TextAreaProps) {
  return (
    <div className='col-span-full'>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200 dark:bg-transparent'
      >
        {label}
      </label>
      <div className='mt-2'>
        <textarea
          id={name}
          {...register(`${name}`, { required: true })}
          rows={3}
          className={cn(
            'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-sm dark:text-gray-200 dark:bg-transparent',
            errors[`${name}`] && 'focus:ring-red-500'
          )}
          placeholder={placeholder}
        />
        {errors[`${name}`] && (
          <span className='text-xs text-red-600'>Description is required</span>
        )}
      </div>
      {helperText && (
        <p className='mt-1 text-sm leading-6 text-gray-600'>{helperText}</p>
      )}
    </div>
  );
}
