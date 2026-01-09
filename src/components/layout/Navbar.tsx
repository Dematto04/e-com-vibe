import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { toggleCart, cartCount } = useCart();
  const { items } = useWishlist();
  const wishlistCount = items.length;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-white border-b-3 border-black'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="font-display text-4xl font-black tracking-tighter text-black hover:text-[var(--color-brutal-primary)] transition-colors duration-200 uppercase">
          VIBE
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          <Link to="/products" className="font-bold text-lg tracking-tight hover:bg-[var(--color-brutal-primary)] hover:text-black px-2 py-1 transition-all duration-200 uppercase border-2 border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Collections
          </Link>
          <Link to="/story" className="font-bold text-lg tracking-tight hover:bg-[var(--color-brutal-secondary)] hover:text-black px-2 py-1 transition-all duration-200 uppercase border-2 border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Our Story
          </Link>
          <Link to="/membership" className="font-bold text-lg tracking-tight hover:bg-[var(--color-brutal-accent)] hover:text-white px-2 py-1 transition-all duration-200 uppercase border-2 border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Membership
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-black hover:text-[var(--color-brutal-primary)] transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          
          <Link to="/wishlist" className="text-black hover:text-red-500 transition-colors duration-200 relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--color-brutal-secondary)] text-white text-xs font-black w-5 h-5 flex items-center justify-center border-2 border-black">
                {wishlistCount}
              </span>
            )}
          </Link>

          <button 
            onClick={toggleCart}
            className="text-black hover:text-[var(--color-brutal-secondary)] transition-colors duration-200 relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--color-brutal-primary)] text-black text-xs font-black w-5 h-5 flex items-center justify-center border-2 border-black">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
