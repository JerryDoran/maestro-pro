'use server';

import { db } from '@/prisma/db';
import { ProjectProps } from '@/types';
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
      };
    }
    const newProject = await db.project.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        thumbnail: data.thumbnail,
        startDate: data.startDate,
        clientId: data.clientId,
        userId: data.userId,
      },
    });
    // console.log(newCategory);
    revalidatePath('/dashboard/projects');
    return newProject;
    console.log(newProject);
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
