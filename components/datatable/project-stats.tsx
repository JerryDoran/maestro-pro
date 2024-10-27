import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ProjectStats() {
  return (
    <Card>
      <CardHeader className='flex flex-col items-stretch space-y-0 p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className='flex'>
          <div className='relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'>
            <span className='text-xs text-muted-foreground'>
              Total Projects
            </span>
            <span className='text-lg font-bold leading-none sm:text-3xl'>
              02
            </span>
          </div>
        </div>
        <div className='flex'>
          <div className='relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'>
            <span className='text-xs text-muted-foreground'>Total Revenue</span>
            <span className='text-lg font-bold leading-none sm:text-3xl'>
              200,780
            </span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
