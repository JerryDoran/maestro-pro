import Image from 'next/image';
import React from 'react';

export default function ImageColumn({
  row,
  accessorKey,
}: {
  row: any;
  accessorKey: any;
}) {
  const imageUrl = row.getValue(`${accessorKey}`);
  // const thum = row.getValue(`${accessorKey}`);
  // console.log(imageUrl);
  return (
    <div className='shrink-0'>
      <Image
        alt={`${accessorKey}`}
        className='rounded-full object-cover'
        height='45'
        src={imageUrl ?? ''}
        width='45'
      />
    </div>
  );
}
