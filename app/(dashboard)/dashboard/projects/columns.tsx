'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import DateColumn from '@/components/datatable-columns/date-column';
import ImageColumn from '@/components/datatable-columns/image-column';
import SortableColumn from '@/components/datatable-columns/sortable-column';
import { ColumnDef } from '@tanstack/react-table';
import ActionColumn from '@/components/datatable-columns/action-column';
import { Project } from '@prisma/client';
import Link from 'next/link';

export const columns: ColumnDef<Project>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'thumbnail',
    header: 'Project Image',
    cell: ({ row }) => <ImageColumn row={row} accessorKey='thumbnail' />,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <SortableColumn column={column} title='Name' />,
  },

  {
    accessorKey: 'budget',
    header: 'Budget',
    cell: ({ row }) => {
      const project = row.original;
      return <p className=''>${project.budget?.toLocaleString()}</p>;
    },
  },
  {
    accessorKey: 'timeline',
    header: 'Timeline',
    cell: ({ row }) => {
      const project = row.original;
      return <p className='ml-2'>{project.timeline?.toString()} days</p>;
    },
  },
  {
    accessorKey: 'startDate',
    header: 'Project Start Date',
    cell: ({ row }) => <DateColumn row={row} accessorKey='startDate' />,
  },

  {
    accessorKey: 'createdAt',
    header: 'Date Created',
    cell: ({ row }) => <DateColumn row={row} accessorKey='createdAt' />,
  },
  {
    accessorKey: 'createdAt',
    header: '',
    cell: ({ row }) => {
      return (
        <Button
          size='sm'
          variant='outline'
          className='text-xs border-neutral-600 text-neutral-300'
        >
          <Link href={`/dashboard/projects/view/project-name`}>View</Link>
        </Button>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const project = row.original;
      return (
        <ActionColumn
          row={row}
          model='category'
          editEndpoint={`projects/update/${project.id}`}
          id={project.id}
        />
      );
    },
  },
];
