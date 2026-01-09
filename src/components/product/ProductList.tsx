import { useState, useEffect, useRef, useCallback } from 'react';
import Aos from 'aos';

import { fetchProducts, searchProducts, fetchCategoryList, fetchProductsByCategory } from '../../api/products';
import ProductCard from './ProductCard';
import { ProductCardSkeleton } from '../ui/Skeleton';
import type { Product } from '../../types/Product';

const LIMIT = 30;

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  
  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setSkip(prevSkip => prevSkip + LIMIT);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // Refresh AOS when products change
  useEffect(() => {
    Aos.refresh();
  }, [products]);

  // Fetch Categories on mount
  useEffect(() => {
    fetchCategoryList()
      .then(setCategories)
      .catch(err => console.error('Failed to load categories', err));
  }, []);

  // Reset list when filters change
  useEffect(() => {
    setProducts([]);
    setSkip(0);
    setHasMore(true);
  }, [searchQuery, selectedCategory]);

  // Fetch Products
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        let data;
        if (searchQuery) {
          data = await searchProducts(searchQuery, LIMIT, skip);
        } else if (selectedCategory) {
          data = await fetchProductsByCategory(selectedCategory, LIMIT, skip);
        } else {
          data = await fetchProducts(LIMIT, skip);
        }

        setProducts(prev => skip === 0 ? data.products : [...prev, ...data.products]);
        setHasMore(data.products.length === LIMIT);
      } catch (err) {
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    // Debounce search
    const timeoutId = setTimeout(() => {
      loadProducts();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [skip, searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-[var(--color-brutal-bg)] p-6 border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="SEARCH PRODUCTS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border-3 border-black py-3 px-4 text-black font-bold placeholder-gray-500 focus:outline-none focus:bg-[var(--color-brutal-primary)] transition-colors uppercase"
          />
        </div>
        
        <div className="w-full md:w-1/3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-white border-3 border-black text-black font-bold py-3 px-4 focus:outline-none focus:bg-[var(--color-brutal-secondary)] appearance-none cursor-pointer uppercase"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat} className="capitalize">{cat.replace('-', ' ')}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="text-black font-bold text-center py-8 border-3 border-black bg-red-500">
          {error}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <div ref={lastProductElementRef} key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          } else {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
        
        {/* Loading Skeletons */}
        {loading && (
          <>
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductCardSkeleton key={`skeleton-${i}`} />
            ))}
          </>
        )}
      </div>
      
      {!hasMore && products.length > 0 && (
        <div className="text-center py-12 text-black font-black tracking-widest text-xl uppercase bg-[var(--color-brutal-primary)] border-3 border-black transform rotate-1 inline-block mx-auto px-6">
          END OF COLLECTION
        </div>
      )}
      
      {!loading && products.length === 0 && !error && (
        <div className="text-center py-20">
          <p className="text-3xl text-black font-display font-black uppercase">No products found.</p>
        </div>
      )}
    </div>
  );
}
