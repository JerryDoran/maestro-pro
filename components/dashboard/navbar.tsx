import React from 'react';
import Link from 'next/link';
import {
  Home,
  LayoutGrid,
  LineChart,
  Menu,
  Package,
  Search,
  Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Session } from 'next-auth';

import { ModeToggle } from '@/components/mode-toggle';
import { AvatarMenuButton } from './avatar-menu-button';
import Logo from '@/components/global/logo';

export default function Navbar({ session }: { session: Session }) {
  return (
    <header className='flex h-[70px] items-center gap-4 border-b bg-muted/40 px-4 lg:px-6 py-4'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='flex flex-col'>
          <nav className='grid gap-2 text-lg font-medium'>
            <Logo href='/dashboard' title='Maestro Pro' />
            <Link
              href='#'
              className='flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
            >
              <Home className='h-5 w-5' />
              Dashboard
            </Link>
            <Link
              href='#'
              className='flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground'
            >
              <LayoutGrid className='h-5 w-5' />
              Projects
              <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                6
              </Badge>
            </Link>
            <Link
              href='#'
              className='flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
            >
              <Package className='h-5 w-5' />
              Clients
            </Link>
            <Link
              href='#'
              className='flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
            >
              <Users className='h-5 w-5' />
              Finance
            </Link>
            <Link
              href='#'
              className='flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground'
            >
              <LineChart className='h-5 w-5' />
              Reports
            </Link>
          </nav>
          <div className='mt-auto'>
            <Card>
              <CardHeader>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size='sm' className='w-full'>
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className='w-full flex-1'>
        <form>
          <div className='relative'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search...'
              className='w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3'
            />
          </div>
        </form>
      </div>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex-shrink-0" asChild variant={"ghost"}>
            <Avatar>
              <AvatarImage
                src={session?.user?.image ?? ""}
                alt={session?.user?.name ?? ""}
              />
              <AvatarFallback>
                {getInitials(session?.user?.name)}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
      <ModeToggle />
      <AvatarMenuButton session={session} />
    </header>
  );
}
