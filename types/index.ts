import { ProjectStatus, Task, UserRole } from '@prisma/client';

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
  companyName?: string;
  companyDescription?: string;
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

export type ProjectData = {
  id: string;
  name: string;
  slug: string;
  notes?: string | null;
  description?: string | null;
  bannerImage?: string | null;
  thumbnail?: string | null;
  budget?: number | null;
  timeline?: number | null;
  startDate: Date;
  endDate?: Date | null;
  status: ProjectStatus;
  clientId: string;
  userId: string;
  modules: {
    id: string;
    name: string;
    tasks: Task[];
  }[];
  members: {
    id: string;
    name: string;
    email: string;
    role: string;
  }[];
  invoices: {
    id: string;
    invoiceNumber: string;
    amount: number;
    status: string;
    dueDate?: Date | null;
  }[];
  payments: {
    id: string;
    amount: number;
    date: Date;
    method: string;
  }[];
  comments: {
    id: string;
    content: string;
    createdAt: Date;
  }[];
  client: {
    id: string;
    name: string;
    email: string;
    phone: string;
    companyName?: string | null;
    companyDescription?: string | null;
  };
  createdAt: Date;
  updatedAt: Date;
};

export type Module = {
  id: string;
  name: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProjectComment = {
  id: string;
  content: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Member = {
  id: string;
  name: string;
  email: string;
  role: string;
  projectId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Invoice = {
  id: string;
  invoiceNumber: string;
  amount: number;
  status: string;
  dueDate: Date;
  projectId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Payment = {
  id: string;
  amount: number;
  date: Date;
  method: string;
  projectId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ClientData = {
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  image: string | null;
  country: string | null;
  location: string | null;
  role: UserRole;
  companyName: string | null;
  companyDescription: string | null;
};
