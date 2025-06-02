import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

import { PageHeader } from '@react-router-updates/ui/components/page-header';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@react-router-updates/ui/components/ui/breadcrumb';
import { UsersTable } from '@react-router-updates/ui/components/users-table';
import { fetchUsers, User } from '@react-router-updates/data-access';

export function UsersPage() {
  const [requestState, setRequestState] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      setRequestState('loading');
      try {
        const users = await fetchUsers();
        setData(users);
        setRequestState('success');
      } catch {
        setRequestState('error');
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <PageHeader>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink asChild>
                <NavLink to="/content">Content</NavLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Users</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>

      {requestState === 'error' && <p>Could not load users 😬</p>}
      {requestState === 'loading' && <UsersTable.Skeleton />}
      {requestState === 'success' && <UsersTable data={data} />}
    </>
  );
}
