import ComparisonFeatures from '@/components/comparison-features';
import { AnimatedAvatars } from '@/components/global/avatar-circles';
import { CustomLinkButton } from '@/components/global/custom-link-button';

import StarRating from '@/components/global/StarRating';

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // const { data: session } = useSession();
  // console.log(session?.user);
  return (
    <main className='min-h-screen'>
      <div className='mx-auto max-w-4xl py-16 '>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Orchestrate your projects and clients with Maestro.
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600 mb-4'>
            Maestro is a powerful project management platform designed to
            harmonize your team's efforts. From small startups to large
            enterprises, our intuitive tools help you compose, conduct, and
            complete projects with precision and grace.
          </p>
          <CustomLinkButton title='Create your project' href='/login' />
          <div className='pt-8 pb-4 flex items-center  justify-center gap-8'>
            <div className=''>
              <AnimatedAvatars />
            </div>
            <div className=''>
              <StarRating count={5} />
              <p className='dark:text-slate-900'>Delivering projects faster</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-6xl py-16'>
        <div className=''>
          <ComparisonFeatures />
        </div>
      </div>
    </main>
  );
}
