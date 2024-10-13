import CategoryForm from '@/components/forms/category-form';
import ClientForm from '@/components/forms/client-form';
import { authOptions } from '@/config/auth';
import { getServerSession } from 'next-auth';
import React from 'react';

export default async function NewClient() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  return (
    <div className='p-8'>
      <ClientForm userId={userId} />
    </div>
  );
}
