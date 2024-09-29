import React from 'react';
import { columns } from './columns';
import { Category } from '@prisma/client';
import DataTable from '@/components/DataTableComponents/DataTable';

import { getAllCategories } from '@/actions/categories';
import TableHeader from '@/components/dashboard/tables/table-header';

export default async function page() {
  const categories: Category[] = (await getAllCategories()) || [];
  return (
    <div className='p-8'>
      <TableHeader
        title='Clients'
        linkTitle='Add Client'
        href='/dashboard/clients/new'
        data={categories}
        model='client'
      />
      <div className='py-8'>
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}
