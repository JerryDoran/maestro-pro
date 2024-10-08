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
import { Category } from '@prisma/client';
import { CategoryProps } from '@/types';
import FormHeader from '@/components/forms/form-header';
import TextInput from '@/components/form-inputs/text-input';
import TextArea from '@/components/form-inputs/text-area';
import ImageInput from '@/components/form-inputs/image-input';
import FormFooter from '@/components/forms/form-footer';
import { createCategory, updateCategoryById } from '@/actions/categories';

export type SelectOptionProps = {
  label: string;
  value: string;
};
type CategoryFormProps = {
  editingId?: string | undefined;
  initialData?: Category | undefined | null;
};
export default function CategoryForm({
  editingId,
  initialData,
}: CategoryFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryProps>({
    defaultValues: {
      title: initialData?.title,
      description: initialData?.description || '',
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || '/placeholder.svg';
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveCategory(data: CategoryProps) {
    try {
      setLoading(true);
      data.slug = generateSlug(data.title);
      data.imageUrl = imageUrl;

      if (editingId) {
        await updateCategoryById(editingId, data);
        setLoading(false);
        // Toast
        toast.success('Updated Successfully!');
        //reset
        reset();
        //route
        router.push('/dashboard/categories');
        setImageUrl('/placeholder.svg');
      } else {
        await createCategory(data);
        setLoading(false);
        // Toast
        toast.success('Successfully Created!');
        //reset
        reset();
        setImageUrl('/placeholder.svg');
        //route
        router.push('/dashboard/categories');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  // async function handleDeleteAll() {
  // setLoading(true);
  // try {
  // await deleteManyCategories();
  // setLoading(false);
  // } catch (error) {
  // console.log(error);
  // }
  // }

  return (
    <form className='' onSubmit={handleSubmit(saveCategory)}>
      <FormHeader
        href='/categories'
        parent=''
        title='Category'
        editingId={editingId}
        loading={loading}
      />

      <div className='grid grid-cols-12 gap-6 py-8'>
        <div className='lg:col-span-8 col-span-full space-y-3'>
          <Card>
            <CardHeader>
              <CardTitle>Category Title</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6'>
                <div className='grid gap-3'>
                  <TextInput
                    register={register}
                    errors={errors}
                    label='Category Title'
                    name='title'
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
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='lg:col-span-4 col-span-full '>
          <div className='grid auto-rows-max items-start gap-4 '>
            <ImageInput
              title='Category Image'
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint='categoryImage'
            />
          </div>
        </div>
      </div>
      <FormFooter
        href='/categories'
        editingId={editingId}
        loading={loading}
        title='Category'
        parent=''
      />
    </form>
  );
}
