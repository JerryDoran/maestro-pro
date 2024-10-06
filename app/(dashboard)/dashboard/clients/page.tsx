import React from 'react';
import { columns } from './columns';
import { User } from '@prisma/client';
import DataTable from '@/components/datatable/data-table';

import TableHeader from '@/components/dashboard/tables/table-header';
import { getClients } from '@/actions/clients';

export default async function ClientsPage() {
  const clients: User[] = (await getClients()) || [];
  return (
    <div className='p-8'>
      <TableHeader
        title='Clients'
        linkTitle='Add Client'
        href='/dashboard/clients/new'
        data={clients}
        model='client'
      />
      <div className='py-8'>
        <DataTable data={clients} columns={columns} />
      </div>
    </div>
  );
}
