import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth';
import { Session } from 'next-auth';

type AuthUser = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  email: string;
  role: string;
};

export const getAuthUser = async (): Promise<AuthUser> => {
  const session: Session | null = await getServerSession(authOptions);
  if (!session || !session.user) {
    throw new Error('No active session found or user not found in session');
  }

  const user = session.user;

  return user;

  // return {
  //   id: user.id as string,
  //   name: user.name as string,
  //   firstName: user.firstName as string,
  //   lastName: user.lastName as string,
  //   phone: user.phone as string,
  //   image: user.image as string,
  //   email: user.email as string,
  //   role: user.role as string,
  // };
};
