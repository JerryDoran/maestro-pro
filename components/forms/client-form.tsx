'use client';

import { Card, CardContent } from '@/components/ui/card';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import toast from 'react-hot-toast';
import { User } from '@prisma/client';
import { UserProps } from '@/types';
import FormHeader from '@/components/forms/form-header';
import TextInput from '@/components/form-inputs/text-input';
import ImageInput from '@/components/form-inputs/image-input';
import FormFooter from '@/components/forms/form-footer';
import PasswordInput from '@/components/form-inputs/password-input';
import { createUser } from '@/actions/users';
import { Headset, Loader2, Mail, User as UserIcon, Lock } from 'lucide-react';
import SubmitButton from '@/components/form-inputs/submit-button';

export type SelectOptionProps = {
  label: string;
  value: string;
};
type ClientFormProps = {
  editingId?: string | undefined;
  initialData?: User | undefined | null;
};
export default function ClientForm({
  editingId,
  initialData,
}: ClientFormProps) {
  const [emailErr, setEmailErr] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserProps>({
    defaultValues: {
      firstName: initialData?.firstName || '',
      lastName: initialData?.lastName || '',
      phone: initialData?.phone || '',
      image: initialData?.image || '',
      email: initialData?.email || '',
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage =
    initialData?.image ||
    'https://utfs.io/f/59b606d1-9148-4f50-ae1c-e9d02322e834-2558r.png';
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function onSubmit(data: UserProps) {
    setLoading(true);
    data.name = `${data.firstName} ${data.lastName}`;
    data.image = imageUrl;
    data.role = 'CLIENT';

    try {
      const res = await createUser(data);
      if (res.status === 409) {
        setLoading(false);
        setEmailErr(res.error);
      } else if (res.status === 200) {
        setLoading(false);
        toast.success('Client created successfully');
        router.push('/dashboard/clients');
      } else {
        setLoading(false);
        toast.error('Something went wrong!');
      }
    } catch (error) {
      setLoading(false);
      console.error('Network Error:', error);
      toast.error('Its seems something is wrong, try again');
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
    <form className='' onSubmit={handleSubmit(onSubmit)}>
      <FormHeader
        href='/clients'
        parent=''
        title='Client'
        editingId={editingId}
        loading={loading}
      />

      <div className='grid grid-cols-12 gap-6 py-8'>
        <div className='lg:col-span-8 col-span-full space-y-3'>
          <Card className='pt-4'>
            <CardContent>
              <div className='grid gap-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <TextInput
                    register={register}
                    errors={errors}
                    label='First Name'
                    name='firstName'
                    icon={UserIcon}
                    placeholder='first Name'
                  />
                  <TextInput
                    register={register}
                    errors={errors}
                    label='Last Name'
                    name='lastName'
                    icon={UserIcon}
                    placeholder='last Name'
                  />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <TextInput
                    register={register}
                    errors={errors}
                    label='Phone'
                    name='phone'
                    icon={Headset}
                    placeholder='phone'
                  />
                  <div className=''>
                    <TextInput
                      type='email'
                      register={register}
                      errors={errors}
                      label='Email Address'
                      name='email'
                      icon={Mail}
                      placeholder='email'
                    />
                    {emailErr && (
                      <p className='text-red-500 text-xs mt-2'>{emailErr}</p>
                    )}
                  </div>
                </div>

                {!editingId && (
                  <PasswordInput
                    register={register}
                    errors={errors}
                    label='Password'
                    name='password'
                    icon={Lock}
                    placeholder='password'
                    type='password'
                  />
                )}
                <div>
                  <SubmitButton
                    title='Sign Up'
                    loadingTitle='Creating Please wait..'
                    loading={loading}
                    className='w-full'
                    loaderIcon={Loader2}
                    showIcon={false}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='lg:col-span-4 col-span-full'>
          <div className='grid auto-rows-max items-start gap-4'>
            <ImageInput
              title='Profile Image'
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint='clientImage'
            />
          </div>
        </div>
      </div>
      <FormFooter
        href='/clients'
        editingId={editingId}
        loading={loading}
        title='Client'
        parent=''
      />
    </form>
  );
}
