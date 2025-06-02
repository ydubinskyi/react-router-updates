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
import { ProductsTable } from '@react-router-updates/ui/components/products-table';
import { fetchProducts, Product } from '@react-router-updates/data-access';

export function ProductsPage() {
  const [requestState, setRequestState] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      setRequestState('loading');
      try {
        const products = await fetchProducts();
        setData(products);
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
              <BreadcrumbPage>Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>

      {requestState === 'error' && <p>Could not load products 😬</p>}
      {requestState === 'loading' && <ProductsTable.Skeleton />}
      {requestState === 'success' && <ProductsTable data={data} />}
    </>
  );
}
