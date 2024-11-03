import { getClients } from '@/actions/clients';
import ProjectForm from '@/components/forms/project-form';

import { getAuthUser } from '@/config/get-auth-user';

export default async function NewProject() {
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
      <ProjectForm clients={userClients} userId={userId} />
    </div>
  );
}
