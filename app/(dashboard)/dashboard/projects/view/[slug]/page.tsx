import { getProjectDetailsBySlug } from '@/actions/projects';
import ProjectDetails from '@/components/projects/project-details';
import { notFound } from 'next/navigation';

export default async function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const projectData = await getProjectDetailsBySlug(params.slug);

  if (!projectData) {
    notFound();
  }
  return (
    <>
      <ProjectDetails project={projectData} />
    </>
  );
}
