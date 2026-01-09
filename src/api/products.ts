import type { ProductResponse } from '../types/Product';

const BASE_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (limit: number = 30, skip: number = 0): Promise<ProductResponse> => {
  const response = await fetch(`${BASE_URL}?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const searchProducts = async (query: string, limit: number = 30, skip: number = 0): Promise<ProductResponse> => {
  const response = await fetch(`${BASE_URL}/search?q=${query}&limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error('Failed to search products');
  }
  return response.json();
};

export const fetchCategoryList = async (): Promise<string[]> => {
  const response = await fetch(`${BASE_URL}/category-list`);
  if (!response.ok) {
    throw new Error('Failed to fetch category list');
  }
  return response.json();
};

export const fetchProductsByCategory = async (category: string, limit: number = 30, skip: number = 0): Promise<ProductResponse> => {
  const response = await fetch(`${BASE_URL}/category/${category}?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products by category');
  }
  return response.json();
};

export const fetchProductById = async (id: string | number): Promise<any> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};
