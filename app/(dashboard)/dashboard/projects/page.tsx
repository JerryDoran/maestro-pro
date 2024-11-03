import React from 'react';
import { columns } from './columns';
import { Project } from '@prisma/client';
import { getAllProjects } from '@/actions/projects';

import DataTable from '@/components/datatable/data-table';
import TableHeader from '@/components/dashboard/tables/table-header';

import { useAuth } from '@/hooks/useAuth';

export default async function ProjectsPage() {
  const user = await useAuth();
  const projects: Project[] = (await getAllProjects(user?.id)) || [];

  return (
    <div className='p-8'>
      <TableHeader
        title='Projects'
        linkTitle='Add Project'
        href='/dashboard/projects/new'
        data={projects}
        model='project'
      />
      <div className='pt-2'>
        <DataTable model='projects' data={projects} columns={columns} />
      </div>
    </div>
  );
}
