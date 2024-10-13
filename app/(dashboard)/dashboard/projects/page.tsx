import React from 'react';
import { columns } from './columns';
import { Category } from '@prisma/client';
import DataTable from '@/components/datatable/data-table';

import { getAllCategories } from '@/actions/categories';
import TableHeader from '@/components/dashboard/tables/table-header';

export default async function ProjectsPage() {
  const categories: Category[] = (await getAllCategories()) || [];
  return (
    <div className='p-8'>
      <TableHeader
        title='Projects'
        linkTitle='Add Project'
        href='/dashboard/projects/new'
        data={categories}
        model='project'
      />
      <div className='py-8'>
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}
