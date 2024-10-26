'use client';
import React from 'react';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
  Bell,
  DollarSign,
  ExternalLink,
  Handshake,
  Home,
  LayoutGrid,
  Lock,
  User2,
  Users,
  Mail,
  Mails,
  UsersRound,
  Settings,
  FolderKanban,
  RectangleEllipsis,
  Landmark,
  FolderClock,
  Wrench,
  BellRing,
  Blocks,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Logo from '../global/logo';

export default function Sidebar() {
  const sidebarLinks = [
    {
      title: 'Dashboard',
      links: [
        {
          title: 'Overview',
          href: '/dashboard',
          icon: Home,
        },
      ],
    },
    {
      title: 'Clients & Projects',
      links: [
        {
          title: 'Clients',
          href: '/dashboard/clients',
          icon: Users,
        },
        {
          title: 'Projects',
          href: '/dashboard/projects',
          icon: LayoutGrid,
        },
      ],
    },
    {
      title: 'Finance',
      links: [
        {
          title: 'Invoices',
          href: '/dashboard/invoices',
          icon: DollarSign,
        },
        {
          title: 'Payments',
          href: '/dashboard/payments',
          icon: Handshake,
        },
      ],
    },
    {
      title: 'Team',
      links: [
        {
          title: 'Members',
          href: '/dashboard/members',
          icon: UsersRound,
        },
        {
          title: 'Roles',
          href: '/dashboard/roles',
          icon: Lock,
        },
      ],
    },
    {
      title: 'Communication',
      links: [
        {
          title: 'Emails',
          href: '/dashboard/emails',
          icon: Mail,
        },
        {
          title: 'Bulk Emails',
          href: '/dashboard/bulk-emails',
          icon: Mails,
        },
      ],
    },
    {
      title: 'Portfolio',
      links: [
        {
          title: 'Generate Portfolio',
          href: '/dashboard/portfolio',
          icon: User2,
        },
      ],
    },
    {
      title: 'Brand',
      links: [
        {
          title: 'Settings',
          href: '/dashboard/brand-settings',
          icon: Settings,
        },
        {
          title: 'File Manager',
          href: '/dashboard/file-manager',
          icon: FolderKanban,
        },
      ],
    },
    {
      title: 'Reports',
      links: [
        {
          title: 'Project Progress',
          href: '/dashboard/project-progress',
          icon: RectangleEllipsis,
        },
        {
          title: 'Financial Summary',
          href: '/dashboard/financial-summary',
          icon: Landmark,
        },
        {
          title: 'Time Tracking',
          href: '/dashboard/time-tracking',
          icon: FolderClock,
        },
      ],
    },
    {
      title: 'Settings',
      links: [
        {
          title: 'Account Settings',
          href: '/dashboard/account-settings',
          icon: Wrench,
        },
        {
          title: 'Notifications',
          href: '/dashboard/notifications',
          icon: BellRing,
        },
        {
          title: 'Integrations',
          href: '/dashboard/notifications',
          icon: Blocks,
        },
      ],
    },
  ];

  const pathname = usePathname();

  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-[70px] items-center border-b px-4 lg:px-6'>
          <Logo href='/dashboard' title='Maestro Pro' />
          <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
            <Bell className='h-4 w-4' />
            <span className='sr-only'>Toggle notifications</span>
          </Button>
        </div>
        <div className='flex-1'>
          <ScrollArea className='h-[650px] w-full rounded-md px-4 py-2'>
            <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
              {sidebarLinks.map((item, i) => {
                return (
                  <div className='py-1' key={i}>
                    <h2 className='pb-1'>{item.title}</h2>
                    {item.links.map((item, i) => {
                      const Icon = item.icon;
                      const isActive = item.href === pathname;
                      return (
                        <Link
                          key={i}
                          href={item.href}
                          className={cn(
                            'flex items-center gap-3 rounded-lg px-3 py-1.5 text-muted-foreground transition-all hover:text-primary',
                            isActive && ' bg-muted  text-primary'
                          )}
                        >
                          <Icon className='h-4 w-4' />
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
              <Link
                href='/'
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
                )}
              >
                <ExternalLink className='h-4 w-4' />
                Live Website
              </Link>
            </nav>
          </ScrollArea>
        </div>
        <div className='mt-auto p-4'>
          <Card x-chunk='dashboard-02-chunk-0'>
            <Button size='sm' className='w-full'>
              Logout
            </Button>
          </Card>
        </div>
        {/* <div className='mt-auto p-4'>
          <Card x-chunk='dashboard-02-chunk-0'>
            <CardHeader className='p-2 pt-0 md:p-4'>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
              <Button size='sm' className='w-full'>
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  );
}
