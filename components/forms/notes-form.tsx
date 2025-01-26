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
type NotesFormProps = {
  editingId?: string | undefined;
  initialNotes?: string | undefined | null;
  setIsEditingNotes: (value: boolean) => void;
};
export default function NotesForm({
  editingId,
  initialNotes,
  setIsEditingNotes,
}: NotesFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectProps>({
    defaultValues: {
      notes: initialNotes || '',
    },
  });

  const [loading, setLoading] = useState(false);

  async function updateNotes(data: ProjectProps) {
    try {
      setLoading(true);

      if (editingId) {
        await updateProjectById(editingId, data);
        toast.success('Notes updated successfully!');
        setLoading(false);

        setIsEditingNotes(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      toast.error('Oops! Something went wrong. ');
      console.log(error);
    }
  }

  return (
    <form className='' onSubmit={handleSubmit(updateNotes)}>
      <div className='grid gap-3'>
        <TextArea register={register} errors={errors} label='' name='notes' />
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
