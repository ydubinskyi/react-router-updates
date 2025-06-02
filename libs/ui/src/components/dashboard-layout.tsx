import { Outlet } from 'react-router';
import { SidebarInset, SidebarProvider } from './ui/sidebar';
import { AppSidebar } from './app-sidebar';

export function DashboardLayout({ title }: { title: string }) {
  return (
    <SidebarProvider>
      <AppSidebar title={title} />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
