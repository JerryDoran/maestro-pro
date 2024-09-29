import OverviewCard from '@/components/dashboard/overview-card';
import RecentClients from '@/components/dashboard/overview/recent-clients';
import RecentProjects from '@/components/dashboard/overview/recent-projects';

export default function Dashboard() {
  return (
    <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
      <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </div>
      <div className='grid gap-4 md:gap-8 lg:grid-cols-2'>
        <RecentProjects />
        <RecentClients />
      </div>
    </main>
  );
}
