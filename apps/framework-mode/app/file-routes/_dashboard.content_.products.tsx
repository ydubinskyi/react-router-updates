import { NavLink, useLoaderData } from 'react-router';

import { PageHeader } from '@react-router-updates/ui/components/page-header';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@react-router-updates/ui/components/ui/breadcrumb';
import { ProductsTable } from '@react-router-updates/ui/components/products-table';
import { fetchProducts } from '@react-router-updates/data-access';

export async function loader({ request }: { request: Request }) {
  const products = await fetchProducts({ signal: request.signal });
  return { data: products };
}

export default function ProductsPage() {
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
              <BreadcrumbPage>Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>

      <ProductsTable data={data} />
    </>
  );
}
