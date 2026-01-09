export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t-4 border-[var(--color-brutal-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-6xl text-[var(--color-brutal-primary)] mb-6 font-black tracking-tighter uppercase">VIBE</h2>
            <p className="text-gray-300 max-w-md font-mono text-lg leading-relaxed border-l-4 border-[var(--color-brutal-secondary)] pl-4">
              Redefining luxury for the modern era. We curate exceptional pieces that transcend trends and embody timeless elegance.
            </p>
          </div>
          
          <div>
            <h3 className="text-[var(--color-brutal-secondary)] text-lg font-bold tracking-widest uppercase mb-6">Collections</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-[var(--color-brutal-primary)] hover:underline decoration-2 underline-offset-4 transition-all duration-300 text-lg font-bold uppercase">New Arrivals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[var(--color-brutal-primary)] hover:underline decoration-2 underline-offset-4 transition-all duration-300 text-lg font-bold uppercase">Best Sellers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[var(--color-brutal-primary)] hover:underline decoration-2 underline-offset-4 transition-all duration-300 text-lg font-bold uppercase">Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[var(--color-brutal-primary)] hover:underline decoration-2 underline-offset-4 transition-all duration-300 text-lg font-bold uppercase">Limited Edition</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[var(--color-brutal-secondary)] text-lg font-bold tracking-widest uppercase mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-[var(--color-brutal-primary)] hover:underline decoration-2 underline-offset-4 transition-all duration-300 text-lg font-bold uppercase">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[var(--color-brutal-primary)] hover:underline decoration-2 underline-offset-4 transition-all duration-300 text-lg font-bold uppercase">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[var(--color-brutal-primary)] hover:underline decoration-2 underline-offset-4 transition-all duration-300 text-lg font-bold uppercase">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-2 border-gray-800">
          <p className="text-gray-500 text-sm font-mono tracking-wide uppercase">© 2026 VIBE E-COM. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social Icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
