import { User } from '@react-router-updates/data-access';

import { DataTable } from './data-table';

const COLUMNS = [
  {
    accessorKey: 'firstname',
    header: 'First Name',
  },
  {
    accessorKey: 'lastname',
    header: 'Last Name',
  },
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'website',
    header: 'Website',
  },
];

export function UsersTable({ data }: { data: User[] }) {
  return (
    <div className="container mx-auto p-4">
      <DataTable columns={COLUMNS} data={data} />
    </div>
  );
}

UsersTable.Skeleton = function UsersTableSkeleton() {
  return (
    <div className="container mx-auto p-4">
      <DataTable columns={COLUMNS} data={[]} isLoading />
    </div>
  );
};
