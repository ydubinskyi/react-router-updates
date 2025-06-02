import { Await, NavLink, useLoaderData } from 'react-router';

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
import { fetchUsers } from '@react-router-updates/data-access';
import React from 'react';

export async function loader({ request }: { request: Request }) {
  const users = fetchUsers({ signal: request.signal });
  return { data: users };
}

export function UsersPage() {
  const { data } = useLoaderData<typeof loader>();

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

      <React.Suspense fallback={<UsersTable.Skeleton />}>
        <Await
          resolve={data}
          errorElement={<p>Could not load users 😬</p>}
          children={(resolvedData) => <UsersTable data={resolvedData} />}
        />
      </React.Suspense>
    </>
  );
}
