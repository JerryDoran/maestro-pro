'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';

import { ProjectProps } from '@/types';

import TextArea from '@/components/form-inputs/text-area';
import { updateProjectById } from '@/actions/projects';
import SubmitButton from '../form-inputs/submit-button';

export type SelectOptionProps = {
  label: string;
  value: string;
};
type DescriptionFormProps = {
  editingId?: string | undefined;
  initialDescription?: string | undefined | null;
  setIsEditingDescription: (value: boolean) => void;
};
export default function DescriptionForm({
  editingId,
  initialDescription,
  setIsEditingDescription,
}: DescriptionFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectProps>({
    defaultValues: {
      description: initialDescription || '',
    },
  });

  const [loading, setLoading] = useState(false);

  async function updateDescription(data: ProjectProps) {
    try {
      setLoading(true);

      if (editingId) {
        await updateProjectById(editingId, data);
        setLoading(false);
        toast.success('Description updated successfully!');

        setIsEditingDescription(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      toast.error('Oops! Something went wrong. ');
      console.log(error);
    }
  }

  return (
    <form className='' onSubmit={handleSubmit(updateDescription)}>
      <div className='grid gap-3'>
        <TextArea
          register={register}
          errors={errors}
          label=''
          name='description'
        />
        <SubmitButton
          loading={loading}
          size='sm'
          title='Update'
          className='w-[250px]'
        />
      </div>
    </form>
  );
}
