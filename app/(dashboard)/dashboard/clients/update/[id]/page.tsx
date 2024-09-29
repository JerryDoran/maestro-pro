import { getCategoryById } from '@/actions/categories';
import CategoryForm from '@/components/forms/category-form';

import React from 'react';

export default async function UpdateCategory({
  params: { id },
}: {
  params: { id: string };
}) {
  const category = await getCategoryById(id);
  return (
    <div className='p-8'>
      <CategoryForm initialData={category} editingId={id} />
    </div>
  );
}
