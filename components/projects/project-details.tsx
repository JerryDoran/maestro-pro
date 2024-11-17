'use client';

import { useState } from 'react';
import {
  Calendar,
  Clock,
  DollarSign,
  Edit2,
  MessageSquare,
  Users,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';
import { ProjectData } from '@/types';

const fakeModules = [
  {
    id: 'mod1',
    name: 'Frontend Development',
    tasks: [
      { id: 'task1', name: 'Design UI mockups' },
      { id: 'task2', name: 'Implement responsive layout' },
      { id: 'task3', name: 'Create reusable components' },
      { id: 'task4', name: 'Integrate with backend API' },
    ],
  },
  {
    id: 'mod2',
    name: 'Backend Development',
    tasks: [
      { id: 'task5', name: 'Set up database schema' },
      { id: 'task6', name: 'Implement authentication system' },
      { id: 'task7', name: 'Create RESTful API endpoints' },
      { id: 'task8', name: 'Optimize database queries' },
    ],
  },
  {
    id: 'mod3',
    name: 'Testing',
    tasks: [
      { id: 'task9', name: 'Write unit tests' },
      { id: 'task10', name: 'Perform integration testing' },
      { id: 'task11', name: 'Conduct user acceptance testing' },
      { id: 'task12', name: 'Fix bugs and issues' },
    ],
  },
  {
    id: 'mod4',
    name: 'Deployment',
    tasks: [
      { id: 'task13', name: 'Set up CI/CD pipeline' },
      { id: 'task14', name: 'Configure production environment' },
      { id: 'task15', name: 'Perform security audits' },
      { id: 'task16', name: 'Monitor application performance' },
    ],
  },
  {
    id: 'mod5',
    name: 'Documentation',
    tasks: [
      { id: 'task17', name: 'Write API documentation' },
      { id: 'task18', name: 'Create user manual' },
      { id: 'task19', name: 'Document codebase' },
      { id: 'task20', name: 'Prepare project handover documents' },
    ],
  },
] as { id: string; name: string; tasks: { id: string; name: string }[] }[];

export default function ProjectDetails({ project }: { project: ProjectData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const router = useRouter();

  if (!project) {
    return <div>Error: Project data not available.</div>;
  }

  // const moduleCategories = (project.modules || []).reduce((acc, module) => {
  //   const category = acc.find((cat) => cat.name === module.name);
  //   if (category) {
  //     category.modules.push(...(module.tasks || []).map((task) => task.title));
  //   } else {
  //     acc.push({
  //       name: module.name,
  //       modules: (module.tasks || []).map((task) => task.title),
  //     });
  //   }
  //   return acc;
  // }, [] as { name: string; modules: string[] }[]);

  const totalBudget = project.budget || 0;
  const usedBudget = (project.payments || []).reduce(
    (sum, payment) => sum + payment.amount,
    0
  );
  const budgetPercentage =
    totalBudget > 0 ? (usedBudget / totalBudget) * 100 : 0;

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100'>
      {/* Banner */}
      <div className='container mx-auto px-4 py-8'>
        <div className='h-48 bg-gradient-to-r from-purple-400 to-indigo-900 flex items-center justify-center container mb-8 relative'>
          <Button
            variant='ghost'
            size='icon'
            className='absolute top-4 left-4 text-gray-200 hover:text-white hover:bg-gray-800/50'
            onClick={() => router.push('/dashboard/projects')}
          >
            <ArrowLeft className='h-6 w-6' />
          </Button>
          <h1 className='text-4xl font-bold text-gray-100'>{project.name}</h1>
          <Button
            variant='ghost'
            size='icon'
            className='text-gray-200 hover:text-white hover:bg-gray-800/50 ml-4 absolute top-4 right-4'
            onClick={() => console.log('Edit project title')}
          >
            <Edit2 className='h-5 w-5' />
          </Button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Description */}
            <Card className='bg-gray-800 border-gray-700'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-gray-100'>
                  Project Description
                </CardTitle>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setIsEditingDescription(!isEditingDescription)}
                >
                  <Edit2 className='h-4 w-4 text-gray-300' />
                </Button>
              </CardHeader>
              <CardContent>
                {isEditingDescription ? (
                  <Textarea
                    className='min-h-[100px] bg-gray-700 text-gray-100 border-gray-600'
                    defaultValue={project.description || ''}
                  />
                ) : (
                  <p className='text-gray-300'>
                    {project.description || 'No description available.'}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Notes */}
            <Card className='bg-gray-800 border-gray-700'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-gray-100'>Notes</CardTitle>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit2 className='h-4 w-4 text-gray-300' />
                </Button>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea
                    className='min-h-[100px] bg-gray-700 text-gray-100 border-gray-600'
                    defaultValue={project.notes || ''}
                    placeholder='Edit your notes here...'
                  />
                ) : (
                  <p className='text-gray-300'>
                    {project.notes || 'No notes available.'}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Comments */}
            <Card className='bg-gray-800 border-gray-700'>
              <CardHeader>
                <CardTitle className='text-gray-100'>Comments</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                {project.comments.map((comment, index) => (
                  <div key={comment.id} className='flex items-start space-x-4'>
                    <Avatar>
                      <AvatarImage src='/placeholder-avatar.jpg' />
                      <AvatarFallback>U{index + 1}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='font-semibold text-gray-200'>
                        User {index + 1}
                      </p>
                      <p className='text-sm text-gray-400'>{comment.content}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  variant='outline'
                  className='w-full text-gray-200 border-gray-600 hover:bg-gray-700'
                >
                  <MessageSquare className='mr-2 h-4 w-4' /> Add Comment
                </Button>
              </CardFooter>
            </Card>

            {/* Modules */}
            <div>
              <h2 className='text-2xl font-bold mb-4 text-gray-100'>
                Project Modules
              </h2>
              {project.modules.length > 0 ? (
                <Accordion type='single' collapsible className='w-full'>
                  {fakeModules.map((category, index) => (
                    <AccordionItem
                      value={`item-${index}`}
                      key={index}
                      className='border-gray-700'
                    >
                      <AccordionTrigger className='text-gray-200 hover:text-gray-100'>
                        {category.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                          {category.tasks.map((task, id) => (
                            <Card
                              key={id}
                              className='bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer border-gray-600'
                            >
                              <CardHeader className='p-4'>
                                <CardTitle className='text-sm text-gray-200'>
                                  {task.name}
                                </CardTitle>
                              </CardHeader>
                            </Card>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className='h-full flex items-center justify-center'>
                  <div className='space-y-4'>
                    <h2>No modules yet</h2>
                    <Button>Add Module</Button>
                  </div>
                </div>
              )}

              {/* <Accordion type='single' collapsible className='w-full'>
                {fakeModules.map((category, index) => (
                  <AccordionItem
                    value={`item-${index}`}
                    key={index}
                    className='border-gray-700'
                  >
                    <AccordionTrigger className='text-gray-200 hover:text-gray-100'>
                      {category.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                        {category.tasks.map((task, id) => (
                          <Card
                            key={id}
                            className='bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer border-gray-600'
                          >
                            <CardHeader className='p-4'>
                              <CardTitle className='text-sm text-gray-200'>
                                {task.name}
                              </CardTitle>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion> */}
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-8'>
            {/* Client Card */}
            <Card className='bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600'>
              <CardHeader>
                <CardTitle className='text-gray-100'>Client Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center space-x-4 mb-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage src='/placeholder-client.jpg' />
                    <AvatarFallback className='bg-gray-700'>
                      {project.client.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-gray-200'>
                      {project.client.name}
                    </p>
                    <p className='text-xs text-gray-200'>
                      {project.client.companyName || 'Individual Client'}
                    </p>
                  </div>
                </div>
                <p className='text-sm text-gray-300'>
                  {project.client.companyDescription ||
                    'No company description available.'}
                </p>
                <div className='mt-4 flex flex-col gap-1'>
                  <p className='text-xs text-gray-400 flex items-center gap-2'>
                    <span className='font-semibold'>Contact: </span>
                    {project.client.name}
                  </p>
                  <p className='text-xs text-gray-400 flex items-center gap-2'>
                    <span className='font-semibold'>Email: </span>
                    {project.client.email}
                  </p>
                  <p className='text-xs text-gray-400 flex items-center gap-2'>
                    <span className='font-semibold'>Phone: </span>
                    {project.client.phone}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Budget */}
            <Card className='bg-gray-800 border-gray-700'>
              <CardHeader className='flex flex-row items-center gap-2'>
                <DollarSign className='mt-1' />
                <CardTitle className='text-gray-100'>Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-2xl font-bold text-green-400'>
                    ${totalBudget.toLocaleString()}
                  </span>
                  <Badge
                    variant='secondary'
                    className='bg-gray-700 text-gray-200'
                  >
                    {budgetPercentage.toFixed(0)}% Used
                  </Badge>
                </div>
                <Progress
                  value={budgetPercentage}
                  className='h-2 bg-gray-700'
                />
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className='bg-gray-800 border-gray-700'>
              <CardHeader className='flex flex-row items-center gap-2'>
                <Calendar className='mt-1' />
                <CardTitle className='text-gray-100'>Timeline</CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Start Date:</span>
                  <span className='font-semibold text-gray-200'>
                    {new Date(project.startDate).toLocaleDateString()}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>End Date:</span>
                  <span className='font-semibold text-gray-200'>
                    {project.endDate
                      ? new Date(project.endDate).toLocaleDateString()
                      : 'Not set'}
                  </span>
                </div>
                <div className='flex items-center mt-2'>
                  <Clock className='h-4 w-4 mr-2 text-blue-400' />
                  <span className='text-sm text-blue-400'>
                    {project.timeline
                      ? `${project.timeline} days remaining`
                      : 'Timeline not set'}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card className='bg-gray-800 border-gray-700'>
              <CardHeader>
                <CardTitle className='text-gray-100'>Team Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex -space-x-2 overflow-hidden'>
                  {project.members.slice(0, 5).map((member, index) => (
                    <Avatar
                      key={member.id}
                      className='inline-block border-2 border-gray-800'
                    >
                      <AvatarImage
                        src={`/placeholder-avatar-${index + 1}.jpg`}
                      />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <Button
                  variant='link'
                  className='mt-2 text-blue-400 hover:text-blue-300'
                >
                  <Users className='mr-2 h-4 w-4' /> View All Members
                </Button>
              </CardContent>
            </Card>

            {/* Invoices and Payments */}
            <Card className='bg-gray-800 border-gray-700'>
              <CardHeader>
                <CardTitle className='text-gray-100'>
                  Invoices & Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue='invoices' className='w-full'>
                  <TabsList className='grid w-full grid-cols-2 bg-gray-700'>
                    <TabsTrigger
                      value='invoices'
                      className='data-[state=active]:bg-gray-600'
                    >
                      Invoices
                    </TabsTrigger>
                    <TabsTrigger
                      value='payments'
                      className='data-[state=active]:bg-gray-600'
                    >
                      Payments
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value='invoices' className='mt-4 space-y-4'>
                    {project.invoices.map((invoice, index) => (
                      <div
                        key={invoice.id}
                        className='flex justify-between items-center'
                      >
                        <div>
                          <p className='font-medium text-gray-200'>
                            Invoice #{index + 1}
                          </p>
                          <p className='text-sm text-gray-400'>
                            {invoice.invoiceNumber}
                          </p>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <span className='font-bold text-gray-200'>
                            ${invoice.amount.toLocaleString()}
                          </span>
                          <Button
                            variant='secondary'
                            size='sm'
                            className='bg-gray-700 text-gray-200 hover:bg-gray-600'
                          >
                            View <ChevronRight className='ml-2 h-4 w-4' />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value='payments' className='mt-4 space-y-4'>
                    {project.payments.map((payment, index) => (
                      <div
                        key={payment.id}
                        className='flex justify-between items-center'
                      >
                        <div>
                          <p className='font-medium text-gray-200'>
                            Payment #{index + 1}
                          </p>
                          <p className='text-sm text-gray-400'>
                            {new Date(payment.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <span className='font-bold text-gray-200'>
                            ${payment.amount.toLocaleString()}
                          </span>
                          <Button
                            variant='secondary'
                            size='sm'
                            className='bg-gray-700 text-gray-200 hover:bg-gray-600'
                          >
                            View <ChevronRight className='ml-2 h-4 w-4' />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
                <Button
                  variant='outline'
                  className='w-full mt-4 text-gray-200 border-gray-600 hover:bg-gray-700'
                >
                  <DollarSign className='mr-2 h-4 w-4' /> View All Transactions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
