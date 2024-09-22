import React from 'react';
import SectionHeading from '@/components/global/section-heading';
import FeaturesCard from '@/components/features-card';

export default function ComparisonFeatures() {
  const cons = [
    'Scattered communication',
    'Manual task tracking',
    'Limited visibility on project progress',
    'Complex learning curve',
    'Complex reporting and analytics',
  ];
  const pros = [
    'Centralized team collaboration',
    'Automated task workflows',
    'Real-time project insights',
    'Intuitive, user-friendly interface',
    'Intelligence resource allocation',
  ];
  return (
    <div className='text-center '>
      <div className='pb-6'>
        <SectionHeading title='Tired of disjointed project management?' />
      </div>
      <div className='py-4 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <FeaturesCard
          features={cons}
          title='Projects without Maestro'
          className='bg-red-50 text-red-800'
          type='con'
        />
        <FeaturesCard
          features={pros}
          title='Projects + Maestro'
          className='bg-green-50 text-green-800'
          type='pro'
        />
      </div>
    </div>
  );
}
