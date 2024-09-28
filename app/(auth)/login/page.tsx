import LoginForm from '@/components/forms/login-form';
import { authOptions } from '@/config/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/dashboard');
  }
  return (
    <section>
      <div className='md:container px-4 md:px-0'>
        <div className='border-gray-200 dark:border-gray-700 max-w-md mx-auto border my-3 shadow rounded-md '>
          {/* Login form */}
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
