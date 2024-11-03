import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ProjectStats({ data }: { data: any }) {
  const totalRevenue = data.reduce((acc: any, item: any) => {
    return acc + item.budget;
  }, 0);
  return (
    <Card>
      <CardHeader className='flex flex-col items-stretch space-y-0 p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
          <CardTitle>Projects Summary</CardTitle>
          <CardDescription>Showing overview of your projects</CardDescription>
        </div>
        <div className='flex'>
          <div className='relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'>
            <span className='text-xs text-muted-foreground'>
              Total Projects
            </span>
            <span className='text-lg font-bold leading-none sm:text-3xl text-right'>
              {data.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        <div className='flex'>
          <div className='relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'>
            <span className='text-xs text-muted-foreground'>Total Revenue</span>
            <span className='text-lg font-bold leading-none sm:text-3xl'>
              ${totalRevenue.toLocaleString()}
            </span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
