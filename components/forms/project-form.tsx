'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { generateSlug } from '@/lib/generateSlug';
import toast from 'react-hot-toast';
import { Project } from '@prisma/client';
import { ProjectProps } from '@/types';
import { createProject, updateProjectById } from '@/actions/projects';
import FormHeader from '@/components/forms/form-header';
import TextInput from '@/components/form-inputs/text-input';
import TextArea from '@/components/form-inputs/text-area';
import ImageInput from '@/components/form-inputs/image-input';
import FormFooter from '@/components/forms/form-footer';
import FormSelectInput from '@/components/form-inputs/form-select-input';
import { convertDateToIso } from '@/lib/convert-date-to-iso';

export type SelectOptionProps = {
  label: string;
  value: string;
};
type ProjectFormProps = {
  editingId?: string | undefined;
  initialData?: Project | undefined | null;
  userId: string;
  clients: SelectOptionProps[];
};
export default function ProjectForm({
  editingId,
  initialData,
  userId,
  clients,
}: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectProps>({
    defaultValues: {
      name: initialData?.name,
      description: initialData?.description || '',
      startDate: initialData?.startDate || new Date().toLocaleDateString(),
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.thumbnail || '/project-thumb.png';
  const [imageUrl, setImageUrl] = useState(initialImage);
  const initialClientId = initialData?.clientId;
  const initialClient = clients?.find((user) => user.value === initialClientId);
  const [selectedClient, setSelectedClient] = useState<any>(initialClient);

  async function saveProject(data: ProjectProps) {
    try {
      setLoading(true);
      data.slug = generateSlug(data.name);
      data.thumbnail = imageUrl;
      data.userId = userId;
      data.clientId = selectedClient.value;
      data.startDate = convertDateToIso(data.startDate);

      if (editingId) {
        await updateProjectById(editingId, data);
        setLoading(false);
        // Toast
        toast.success('Updated Successfully!');
        //reset
        reset();
        //route
        router.push('/dashboard/projects');
        setImageUrl('/project-thumb.png');
      } else {
        await createProject(data);
        setLoading(false);
        // Toast
        toast.success('Successfully Created!');
        //reset
        reset();
        setImageUrl('/project-thumb.png');
        //route
        router.push('/dashboard/projects');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className='' onSubmit={handleSubmit(saveProject)}>
      <FormHeader
        href='/projects'
        parent=''
        title='Project'
        editingId={editingId}
        loading={loading}
      />

      <div className='grid grid-cols-12 gap-6 py-8'>
        <div className='lg:col-span-8 col-span-full space-y-3'>
          <Card>
            <CardContent>
              <div className='grid gap-6'>
                <div className='grid gap-3 pt-4'>
                  <TextInput
                    register={register}
                    errors={errors}
                    label='Project Name'
                    name='name'
                  />
                </div>
                <div className='grid gap-3'>
                  <TextArea
                    register={register}
                    errors={errors}
                    label='Description'
                    name='description'
                  />
                </div>
                <div className='grid gap-3'>
                  <TextInput
                    type='date'
                    register={register}
                    errors={errors}
                    label='Start Date'
                    name='startDate'
                  />
                </div>
                <div className='grid gap-3'>
                  <FormSelectInput
                    label='Client'
                    options={clients}
                    option={selectedClient}
                    setOption={setSelectedClient}
                    toolTipText='Add new client'
                    href='/dashboard/clients/new'
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='lg:col-span-4 col-span-full '>
          <div className='grid auto-rows-max items-start gap-4 '>
            <ImageInput
              title='Project Image'
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint='projectThumbnail'
            />
          </div>
        </div>
      </div>
      <FormFooter
        href='/projects'
        editingId={editingId}
        loading={loading}
        title='Project'
        parent=''
      />
    </form>
  );
}
