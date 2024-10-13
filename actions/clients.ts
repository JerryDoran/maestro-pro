'use server';

import { db } from '@/prisma/db';

export async function getClients(userId: string | undefined) {
  if (userId) {
    try {
      const users = await db.user.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        where: {
          role: 'CLIENT',
          userId: userId,
        },
      });

      return users;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
