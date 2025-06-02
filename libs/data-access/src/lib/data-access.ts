export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
};

export type User = {
  id: number;
  uuid: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  website: string;
  image: string;
};

const API_BASE_URL = 'http://localhost:3333';

export async function fetchUsers({
  signal,
}: { signal?: AbortSignal } = {}): Promise<User[]> {
  console.log('Fetching products from API...', { signal });
  const response = await fetch(`${API_BASE_URL}/api/users`, { signal });
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}

export async function fetchProducts({
  signal,
}: { signal?: AbortSignal } = {}): Promise<Product[]> {
  console.log('Fetching products from API...', { signal });
  const response = await fetch(`${API_BASE_URL}/api/products`, { signal });
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}
