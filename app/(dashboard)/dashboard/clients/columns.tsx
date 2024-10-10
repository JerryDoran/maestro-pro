'use client';

import { Checkbox } from '@/components/ui/checkbox';

import DateColumn from '@/components/datatable-columns/date-column';
import ImageColumn from '@/components/datatable-columns/image-column';
import SortableColumn from '@/components/datatable-columns/sortable-column';
import { ColumnDef } from '@tanstack/react-table';
import ActionColumn from '@/components/datatable-columns/action-column';
import { User } from '@prisma/client';
export const columns: ColumnDef<User>[] = [
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
    accessorKey: 'image',
    header: 'Profile Image',
    cell: ({ row }) => <ImageColumn row={row} accessorKey='image' />,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <SortableColumn column={column} title='Name' />,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <SortableColumn column={column} title='Email' />,
  },
  {
    accessorKey: 'location',
    header: ({ column }) => <SortableColumn column={column} title='Location' />,
  },

  {
    accessorKey: 'phone',
    header: ({ column }) => <SortableColumn column={column} title='Phone' />,
  },

  {
    accessorKey: 'createdAt',
    header: 'Date Created',
    cell: ({ row }) => <DateColumn row={row} accessorKey='createdAt' />,
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const client = row.original;
      return (
        <ActionColumn
          row={row}
          model='client'
          editEndpoint={`clients/update/${client.id}`}
          id={client.id}
        />
      );
    },
  },
];
