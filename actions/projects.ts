'use server';

import { db } from '@/prisma/db';
import { ProjectData, ProjectProps } from '@/types';
import { ProjectStatus, Task, UserRole } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function createProject(data: ProjectProps) {
  const slug = data.slug;
  try {
    const existingProject = await db.project.findUnique({
      where: {
        slug,
      },
    });
    if (existingProject) {
      return {
        status: 409,
        error: `Project ${data.name} already exists!`,
        data: null,
      };
    }
    const newProject = await db.project.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        thumbnail: data.thumbnail,
        startDate: data.startDate,
        endDate: data.endDate,
        clientId: data.clientId,
        userId: data.userId,
        timeline: data.timeline,
        budget: data.budget,
      },
    });
    // console.log(newCategory);
    revalidatePath('/dashboard/projects');
    return {
      status: 200,
      error: null,
      data: newProject,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllProjects(userId: string | undefined) {
  if (!userId) return;

  try {
    const projects = await db.project.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return projects;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function updateProjectById(id: string, data: ProjectProps) {
  try {
    const updatedProject = await db.project.update({
      where: {
        id,
      },
      data,
    });

    revalidatePath('/dashboard/projects');
    return updatedProject;
  } catch (error) {
    console.log(error);
  }
}

export async function getProjectById(id: string) {
  try {
    const project = await db.project.findUnique({
      where: {
        id,
      },
    });
    return project;
  } catch (error) {
    console.log(error);
  }
}

export async function getProjectDetailsBySlug(
  slug: string
): Promise<ProjectData | undefined> {
  try {
    // clientId
    const project = await db.project.findUnique({
      where: { slug },
      include: {
        modules: {
          include: {
            tasks: true,
          },
        },
        members: true,
        invoices: true,
        comments: true,
        payments: true,
      },
    });
    if (!project) return undefined;

    const client = await db.user.findFirst({
      where: {
        id: project.clientId,
        role: UserRole.CLIENT,
      },
      select: {
        id: true,
        name: true,
        firstName: true,
        lastName: true,
        phone: true,
        email: true,
        image: true,
        country: true,
        location: true,
        role: true,
        companyName: true,
        companyDescription: true,
      },
    });

    if (!client) {
      throw new Error('Client not found!');
    }

    const projectData: ProjectData = {
      ...project,
      notes: project.notes ?? undefined,
      description: project.description ?? undefined,
      bannerImage: project.bannerImage ?? undefined,
      thumbnail: project.thumbnail ?? undefined,
      budget: project.budget ?? undefined,
      timeline: project.timeline ?? undefined,
      endDate: project.endDate ?? undefined,
      client,
      modules: project.modules.map((module) => ({
        ...module,
        tasks: module.tasks.map((task) => ({
          id: task.id,
          description: task.description,
          status: task.status,
          createdAt: task.createdAt,
          updatedAt: task.updatedAt,
          title: task.title,
          dueDate: task.dueDate,
          moduleId: task.moduleId,
        })),
        invoices: project.invoices.map((invoice) => ({
          id: invoice.id,
          invoiceNumber: invoice.invoiceNumber,
          amount: invoice.amount,
          status: invoice.status,
          dueDate: invoice.dueDate,
        })),
        payments: project.payments.map((payment) => ({
          id: payment.id,
          amount: payment.amount,
          date: payment.date,
          method: payment.method,
        })),
        comments: project.comments.map((comment) => ({
          id: comment.id,
          content: comment.content,
          createdAt: comment.createdAt,
        })),
      })),
    };
    return projectData;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProject(id: string) {
  try {
    const deletedProject = await db.project.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedProject,
    };
  } catch (error) {
    console.log(error);
  }
}
