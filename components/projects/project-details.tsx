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

export default function ProjectDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const moduleCategories = [
    {
      name: 'Communication',
      modules: ['Quantum Entangler', 'Cosmic Relay', 'Nebula Interface'],
    },
    {
      name: 'Integration',
      modules: [
        'Starship Integration',
        'Satellite Uplink',
        'Ground Station Sync',
      ],
    },
    {
      name: 'Data Processing',
      modules: [
        'Quantum Compiler',
        'Cosmic Data Analyzer',
        'Nebula Visualizer',
      ],
    },
  ];

  const invoices = [
    { id: 'INV-1001', title: 'Initial Setup', amount: 50000 },
    { id: 'INV-1002', title: 'Phase 1 Development', amount: 75000 },
    { id: 'INV-1003', title: 'Equipment Purchase', amount: 100000 },
  ];

  const payments = [
    { id: 'PAY-1001', title: 'Milestone 1 Payment', amount: 25000 },
    { id: 'PAY-1002', title: 'Milestone 2 Payment', amount: 35000 },
    { id: 'PAY-1003', title: 'Equipment Deposit', amount: 50000 },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100'>
      {/* Banner */}

      <div className='container mx-auto px-4 py-8'>
        <div className='h-48 bg-gradient-to-r from-purple-400 to-indigo-900 flex items-center justify-center container mb-8 relative'>
          <Button
            variant='ghost'
            size='icon'
            className='absolute top-4 left-4 text-gray-200 hover:text-white hover:bg-gray-800/50'
            onClick={() => console.log('Navigate back to all projects')}
          >
            <ArrowLeft className='h-6 w-6' />
          </Button>
          <h1 className='text-4xl font-bold text-gray-100'>Project Nebula</h1>
          <Button
            variant='ghost'
            size='icon'
            className='text-gray-200 hover:text-white hover:bg-gray-800/50 ml-4'
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
                    defaultValue='Project Nebula aims to revolutionize interstellar communication through quantum entanglement, enabling instant messaging across vast cosmic distances.'
                  />
                ) : (
                  <p className='text-gray-300'>
                    Project Nebula aims to revolutionize interstellar
                    communication through quantum entanglement, enabling instant
                    messaging across vast cosmic distances.
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
                    placeholder='Edit your notes here...'
                  />
                ) : (
                  <p className='text-gray-300'>
                    Current challenges include maintaining quantum coherence
                    over long periods. Next steps: consult with Dr. Quantum on
                    possible solutions.
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
                <div className='flex items-start space-x-4'>
                  <Avatar>
                    <AvatarImage src='/placeholder-avatar.jpg' />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-semibold text-gray-200'>Jane Doe</p>
                    <p className='text-sm text-gray-400'>
                      Great progress on the quantum stabilizer!
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-4'>
                  <Avatar>
                    <AvatarImage src='/placeholder-avatar-2.jpg' />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-semibold text-gray-200'>John Smith</p>
                    <p className='text-sm text-gray-400'>
                      We need to discuss the power requirements.
                    </p>
                  </div>
                </div>
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
              <Accordion type='single' collapsible className='w-full'>
                {moduleCategories.map((category, index) => (
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
                        {category.modules.map((module, moduleIndex) => (
                          <Card
                            key={moduleIndex}
                            className='bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer border-gray-600'
                          >
                            <CardHeader className='p-4'>
                              <CardTitle className='text-sm text-gray-200'>
                                {module}
                              </CardTitle>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
                    <AvatarFallback>GC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-semibold text-gray-200'>
                      Galactic Communications Inc.
                    </p>
                    <p className='text-sm text-gray-400'>
                      contact@galacticomm.com
                    </p>
                  </div>
                </div>
                <p className='text-sm text-gray-300'>
                  Leading provider of interstellar communication solutions
                </p>
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
                    $2.5M
                  </span>
                  <Badge
                    variant='secondary'
                    className='bg-gray-700 text-gray-200'
                  >
                    75% Used
                  </Badge>
                </div>
                <Progress value={75} className='h-2 bg-gray-700' />
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
                    Jan 1, 2023
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>End Date:</span>
                  <span className='font-semibold text-gray-200'>
                    Dec 31, 2023
                  </span>
                </div>
                <div className='flex items-center mt-2'>
                  <Clock className='h-4 w-4 mr-2 text-blue-400' />
                  <span className='text-sm text-blue-400'>
                    6 months remaining
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
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <Avatar
                      key={index}
                      className='inline-block border-2 border-gray-800'
                    >
                      <AvatarImage
                        src={`/placeholder-avatar-${index + 1}.jpg`}
                      />
                      <AvatarFallback>TM</AvatarFallback>
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
                    {invoices.map((invoice, index) => (
                      <div
                        key={index}
                        className='flex justify-between items-center'
                      >
                        <div>
                          <p className='font-medium text-gray-200'>
                            {invoice.title}
                          </p>
                          <p className='text-sm text-gray-400'>{invoice.id}</p>
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
                    {payments.map((payment, index) => (
                      <div
                        key={index}
                        className='flex justify-between items-center'
                      >
                        <div>
                          <p className='font-medium text-gray-200'>
                            {payment.title}
                          </p>
                          <p className='text-sm text-gray-400'>{payment.id}</p>
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
