import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { fetchProductById } from '../api/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import type { Product } from '../types/Product';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = product ? isInWishlist(product.id) : false;

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setSelectedImage(data.thumbnail);
      } catch (err) {
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--color-brutal-bg)] flex items-center justify-center">
        <div className="text-4xl font-black uppercase animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-[var(--color-brutal-bg)] flex items-center justify-center">
        <div className="text-2xl font-bold text-red-600 border-4 border-black p-8 bg-white shadow-[8px_8px_0px_0px_black]">
          {error || 'Product not found'}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-brutal-bg)] min-h-screen font-sans text-black">
      <Navbar />
      
      <main className="pt-24 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Image */}
            <div className="border-4 border-black shadow-[12px_12px_0px_0px_black] bg-white p-2">
              <img 
                src={selectedImage} 
                alt={product.title} 
                className="w-full h-auto object-contain max-h-[600px]"
              />
            </div>
            
            {/* Thumbnails / Extra Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images?.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`border-3 border-black aspect-square overflow-hidden hover:opacity-80 transition-all ${selectedImage === img ? 'ring-4 ring-[var(--color-brutal-primary)]' : ''}`}
                >
                  <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              
              {/* Header */}
              <div>
                <div className="inline-block bg-[var(--color-brutal-secondary)] border-2 border-black px-3 py-1 mb-4 transform -rotate-2">
                  <span className="font-bold uppercase tracking-widest text-sm">{product.category}</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="bg-black text-white text-3xl font-bold px-4 py-2 transform rotate-1">
                    ${product.price}
                  </div>
                  {product.discountPercentage > 0 && (
                    <div className="text-red-600 font-bold text-xl line-through decoration-4">
                      ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="border-l-4 border-black pl-6 py-2">
                <p className="font-mono text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-4 pt-4">
                <button 
                  onClick={() => product && addToCart(product)}
                  className="w-full py-5 bg-[var(--color-brutal-primary)] border-4 border-black text-xl font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_black] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-all cursor-pointer"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => product && toggleWishlist(product)}
                  className={`w-full py-4 border-4 border-black text-lg font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                    isWishlisted 
                      ? 'bg-[var(--color-brutal-secondary)] text-white hover:bg-black' 
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
              </div>

              {/* Meta */}
              <div className="grid grid-cols-2 gap-4 border-t-4 border-black pt-6 mt-8">
                <div>
                  <span className="block text-gray-500 font-mono text-sm uppercase">Rating</span>
                  <span className="text-xl font-bold flex items-center gap-1">
                    {product.rating} 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--color-brutal-primary)]">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
                <div>
                  <span className="block text-gray-500 font-mono text-sm uppercase">Stock</span>
                  <span className={`text-xl font-bold ${product.stock < 10 ? 'text-red-600' : 'text-green-600'}`}>
                    {product.stock} Units
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-32 border-t-4 border-black pt-16">
          <h2 className="font-display text-4xl font-black uppercase mb-12 flex items-center gap-4">
            <span className="bg-black text-white px-4 py-2">Reviews</span>
            <span className="text-gray-400 text-2xl">({product.reviews?.length || 0})</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.reviews?.map((review: any, idx: number) => (
              <div key={idx} className="bg-white border-3 border-black p-6 shadow-[6px_6px_0px_0px_black]">
                <div className="flex justify-between items-start mb-4">
                  <div className="font-bold uppercase">{review.reviewerName}</div>
                  <div className="flex text-[var(--color-brutal-primary)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < Math.round(review.rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth={i < Math.round(review.rating) ? "0" : "2"} className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="font-mono text-sm text-gray-700 mb-4">"{review.comment}"</p>
                <div className="text-xs text-gray-400 font-mono uppercase">
                  {new Date(review.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
