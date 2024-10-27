import { getClients } from '@/actions/clients';
import { getAllProjects, getProjectById } from '@/actions/projects';
import ProjectForm from '@/components/forms/project-form';
import { getAuthUser } from '@/config/get-auth-user';

import React from 'react';

export default async function UpdateCategory({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = await getProjectById(id);
  const user = await getAuthUser();
  const userId = user?.id ?? '';
  const clients = await getClients(userId);
  const userClients =
    clients?.map((client) => {
      return {
        label: client.name,
        value: client.id,
      };
    }) || [];
  return (
    <div className='p-8'>
      <ProjectForm
        initialData={project}
        editingId={id}
        clients={userClients}
        userId={userId}
      />
    </div>
  );
}
