import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const navigate = useNavigate();
  const { items, isOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  const handleCheckout = () => {
    toggleCart();
    navigate('/checkout');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={toggleCart}
      ></div>

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[var(--color-brutal-bg)] h-full border-l-4 border-black shadow-[-10px_0px_0px_0px_rgba(0,0,0,0.5)] flex flex-col animate-slide-in-right">
        
        {/* Header */}
        <div className="p-6 border-b-4 border-black bg-white flex justify-between items-center">
          <h2 className="font-display text-3xl font-black uppercase tracking-tighter">
            Your Cart <span className="text-[var(--color-brutal-primary)]">({items.length})</span>
          </h2>
          <button 
            onClick={toggleCart}
            className="w-10 h-10 flex items-center justify-center border-3 border-black bg-[var(--color-brutal-secondary)] hover:bg-black hover:text-white transition-colors font-bold text-xl"
          >
            X
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-mono text-xl font-bold mb-6">YOUR CART IS EMPTY</p>
              <button 
                onClick={toggleCart}
                className="brutal-btn"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="bg-white border-3 border-black p-4 shadow-[4px_4px_0px_0px_black] flex gap-4">
                <div className="w-20 h-20 border-2 border-black flex-shrink-0">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold uppercase text-sm leading-tight pr-2">{item.title}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 font-bold hover:bg-red-600 hover:text-white px-1 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                  <p className="font-mono text-sm text-gray-500 mb-2">{item.category}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border-2 border-black">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-gray-200 font-bold"
                      >
                        -
                      </button>
                      <span className="px-2 font-mono font-bold border-x-2 border-black min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-gray-200 font-bold"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-black text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t-4 border-black bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono font-bold text-lg uppercase">Total</span>
              <span className="font-display text-4xl font-black">${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full py-4 bg-[var(--color-brutal-primary)] border-4 border-black text-xl font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_black] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all mb-3 cursor-pointer"
            >
              Checkout
            </button>
            <p className="text-center text-xs font-mono text-gray-500 uppercase">
              Shipping & Taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
