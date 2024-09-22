import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';
import React from 'react';

type FeatureCardProps = {
  title: string;
  features: string[];
  className?: string;
  type: string;
};
export default function FeaturesCard({
  title,
  features,
  type,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn('rounded-md border p-12 space-y-3 ', className)}>
      <h2 className='font-bold pb-3 text-left text-xl'>{title}</h2>
      {features.map((item, i) => {
        return (
          <div key={i} className='flex items-center'>
            {type === 'con' ? (
              <X className='w-4 h-4 mr-2 flex-shrink-0' />
            ) : (
              <Check className='w-4 h-4 mr-2 flex-shrink-0' />
            )}
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
}
