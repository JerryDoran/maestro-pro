import { authOptions } from '@/config/auth';
import { getServerSession, Session } from 'next-auth';

export type AuthUser = {
  id: string;
  email: string;
  role: string;
  name?: string;
};

export async function useAuth(): Promise<AuthUser | null> {
  const session: Session | null = await getServerSession(authOptions);
  if (session?.user) {
    const { id, email, role, name } = session.user as AuthUser;

    return {
      id,
      email,
      role,
      name,
    };
  }
  return null;
}
