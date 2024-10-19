'use client';
import AddNewButton from '@/components/form-inputs/add-new-button';

import Select from 'react-tailwindcss-select';
import { Option, Options } from 'react-tailwindcss-select/dist/components/type';

type FormSelectInputProps = {
  options: Options;
  label: string;
  option: Option;
  setOption: any;
  href?: string;
  labelShown?: boolean;
  toolTipText?: string;
};

export default function FormSelectInput({
  options,
  label,
  option,
  setOption,
  href,
  toolTipText,
  labelShown = true,
}: FormSelectInputProps) {
  return (
    <div className=''>
      {labelShown && (
        <h2 className='pb-2 block text-sm font-medium leading-6 dark:text-gray-100'>
          Select {label}
        </h2>
      )}
      <div className='flex items-center space-x-2 select'>
        <Select
          isSearchable
          primaryColor='black'
          value={option}
          onChange={(item) => setOption(item)}
          options={options}
          placeholder={label}
          classNames={{
            menu: 'bg-black',
          }}
        />
        {href && toolTipText && (
          <AddNewButton toolTipText={toolTipText} href={href} />
        )}
      </div>
    </div>
  );
}
