import * as React from 'react';
import { AudioWaveform, SquareTerminal, BookOpenText } from 'lucide-react';
import { NavLink } from 'react-router';

import { NavMain } from './nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from './ui/sidebar';

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Overview',
          url: '/',
        },
        {
          title: 'Settings',
          url: '/settings',
        },
      ],
    },
    {
      title: 'Content',
      url: '/content',
      icon: BookOpenText,
      isActive: true,
      items: [
        {
          title: 'Users',
          url: '/content/users',
        },
        {
          title: 'Products',
          url: '/content/products',
        },
      ],
    },
  ],
};

export function AppSidebar({
  title,
  ...props
}: React.ComponentProps<typeof Sidebar> & { title: string }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <NavLink to="/">
                <AudioWaveform className="!size-5" />
                <span className="text-base font-semibold">{title}</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
