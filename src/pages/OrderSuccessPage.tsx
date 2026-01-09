import { useNavigate } from 'react-router-dom';

export default function OrderSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--color-brutal-bg)] flex items-center justify-center p-6">
      <div className="bg-white border-4 border-black p-12 shadow-[16px_16px_0px_0px_black] max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-[var(--color-brutal-primary)] rounded-full border-4 border-black flex items-center justify-center animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 tracking-tighter">Order Placed!</h1>
        <p className="text-xl font-bold font-mono mb-8">
          Thank you for choosing Vibe E-COM. Your order has been confirmed and is being processed.
        </p>
        
        <button 
          onClick={() => navigate('/products')}
          className="bg-black text-white px-8 py-4 text-xl font-bold uppercase tracking-widest hover:bg-[var(--color-brutal-secondary)] hover:text-black border-4 border-black transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_black]"
        >
          Back to Shopping
        </button>
      </div>
    </div>
  );
}
