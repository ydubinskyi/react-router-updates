import { ColumnDef } from '@tanstack/react-table';

import { Product } from '@react-router-updates/data-access';

import { DataTable } from './data-table';

const COLUMNS: ColumnDef<Product>[] = [
  {
    accessorKey: 'id',
    header: '#',
  },
  {
    accessorKey: 'image',
    header: 'Image',
    cell: ({ row }) => (
      <img
        src={row.original.image}
        alt={row.original.name}
        className="w-16 h-16 object-cover"
      />
    ),
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'tags',
    header: 'Tags',
  },
];

export function ProductsTable({ data }: { data: Product[] }) {
  return (
    <div className="container mx-auto p-4">
      <DataTable columns={COLUMNS} data={data} />
    </div>
  );
}

ProductsTable.Skeleton = function ProductsTableSkeleton() {
  return (
    <div className="container mx-auto p-4">
      <DataTable columns={COLUMNS} data={[]} isLoading />
    </div>
  );
};
