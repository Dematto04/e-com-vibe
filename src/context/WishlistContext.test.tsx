import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { WishlistProvider, useWishlist } from './WishlistContext'; 
import type { Product } from '../types/Product';

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  description: 'Test Description',
  category: 'Test Category',
  price: 100,
  discountPercentage: 0,
  rating: 5,
  stock: 10,
  tags: [],
  sku: 'TEST-1',
  weight: 1,
  dimensions: { width: 1, height: 1, depth: 1 },
  warrantyInformation: 'None',
  shippingInformation: 'None',
  availabilityStatus: 'In Stock',
  reviews: [],
  returnPolicy: 'None',
  minimumOrderQuantity: 1,
  meta: { createdAt: '', updatedAt: '', barcode: '', qrCode: '' },
  images: [],
  thumbnail: '',
};

describe('WishlistContext', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('provides initial empty state', () => {
    const { result } = renderHook(() => useWishlist(), { wrapper: WishlistProvider });
    expect(result.current.items).toEqual([]);
    expect(result.current.isInWishlist(1)).toBe(false);
  });

  it('adds item to wishlist', () => {
    const { result } = renderHook(() => useWishlist(), { wrapper: WishlistProvider });
    
    act(() => {
      result.current.addToWishlist(mockProduct);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].id).toBe(1);
    expect(result.current.isInWishlist(1)).toBe(true);
  });

  it('removes item from wishlist', () => {
    const { result } = renderHook(() => useWishlist(), { wrapper: WishlistProvider });
    
    act(() => {
      result.current.addToWishlist(mockProduct);
    });
    
    expect(result.current.items).toHaveLength(1);

    act(() => {
      result.current.removeFromWishlist(1);
    });

    expect(result.current.items).toHaveLength(0);
    expect(result.current.isInWishlist(1)).toBe(false);
  });

  it('toggles item in wishlist', () => {
     const { result } = renderHook(() => useWishlist(), { wrapper: WishlistProvider });

     // Add
     act(() => {
       result.current.toggleWishlist(mockProduct);
     });
     expect(result.current.isInWishlist(mockProduct.id)).toBe(true);

     // Remove
     act(() => {
       result.current.toggleWishlist(mockProduct);
     });
     expect(result.current.isInWishlist(mockProduct.id)).toBe(false);
  });

  it('initializes from localStorage', () => {
    localStorage.setItem('vibe-wishlist', JSON.stringify([mockProduct]));
    const { result } = renderHook(() => useWishlist(), { wrapper: WishlistProvider });
    
    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0].id).toBe(1);
  });

  it('updates localStorage when items change', () => {
    const { result } = renderHook(() => useWishlist(), { wrapper: WishlistProvider });
    
    act(() => {
      result.current.addToWishlist(mockProduct);
    });

    const stored = JSON.parse(localStorage.getItem('vibe-wishlist') || '[]');
    expect(stored).toHaveLength(1);
    expect(stored[0].id).toBe(1);
  });
});
