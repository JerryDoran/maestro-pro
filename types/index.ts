import { ProjectStatus, UserRole } from '@prisma/client';

export type CategoryProps = {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
};
export type UserProps = {
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  email: string;
  country?: string;
  location?: string;
  password: string;
  role?: UserRole;
  userId?: string;
};

export type ProjectProps = {
  name: string;
  slug: string;
  notes?: string;
  description?: string;
  bannerImage?: string;
  thumbnail?: string;
  budget?: number;
  timeline?: number;
  startDate: any;
  endDate?: any;
  status: ProjectStatus;
  clientId: string;
  userId: string;
};

export type LoginProps = {
  email: string;
  password: string;
};
