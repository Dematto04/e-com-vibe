import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import type { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  return (
    <div
      className="group relative bg-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="aspect-[3/4] overflow-hidden relative border-b-3 border-black">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </Link>
        {product.discountPercentage > 0 && (
          <div className="absolute top-0 right-0 bg-[var(--color-brutal-primary)] text-black text-lg font-black px-3 py-1 border-l-3 border-b-3 border-black">
            -{Math.round(product.discountPercentage)}%
          </div>
        )}

        {/* Wishlist Button - Brutalist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`absolute top-0 left-0 p-2 z-10 border-r-3 border-b-3 border-black transition-colors duration-200 cursor-pointer ${
            isWishlisted ? 'bg-[var(--color-brutal-secondary)] text-black' : 'bg-white text-gray-400 hover:text-black'
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>

        {/* Quick Add Button - Brutalist */}
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-0 left-0 right-0 py-4 bg-black text-white text-lg font-bold tracking-widest uppercase opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-20 hover:bg-[var(--color-brutal-secondary)] hover:text-black border-t-3 border-black cursor-pointer"
        >
          Quick Add
        </button>
      </div>


      <div className="p-4 bg-[var(--color-brutal-bg)]">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/products/${product.id}`} className="truncate pr-2">
            <h3 className="font-bold text-xl text-black uppercase hover:underline decoration-2 underline-offset-2">{product.title}</h3>
          </Link>
          <div className="flex items-center text-black font-black text-lg bg-[var(--color-brutal-primary)] px-2 border-2 border-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <span className="ml-1">{product.rating}</span>
          </div>
        </div>
        
        <div className="flex items-baseline gap-2">
          <span className="text-black font-black text-2xl">${product.price}</span>
          {product.discountPercentage > 0 && (
            <span className="text-gray-500 text-sm line-through font-mono font-bold decoration-2 decoration-red-500">
              ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
            </span>
          )}
        </div>
        
        <p className="text-xs text-black mt-2 uppercase tracking-widest font-bold bg-white inline-block px-1 border-2 border-black">{product.category}</p>

      </div>
    </div>
  );
}
