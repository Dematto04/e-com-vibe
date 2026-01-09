import { Link } from 'react-router-dom';

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "The Obsidian Watch",
    price: "$1,295",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Silk Evening Gown",
    price: "$895",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2024&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Leather Weekender",
    price: "$650",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-white relative border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16" data-aos="fade-up">
          <div>
            <h2 className="bg-black text-white inline-block px-2 py-1 text-lg font-bold tracking-widest uppercase mb-4 transform -rotate-2">Curated Selection</h2>
            <h3 className="font-display text-5xl md:text-7xl text-black font-black uppercase tracking-tighter">This Season's <br/> <span className="text-[var(--color-brutal-primary)] bg-black px-2">Essentials</span></h3>
          </div>
          <Link to="/products" className="hidden md:block text-xl font-bold tracking-widest border-b-4 border-black pb-1 hover:bg-[var(--color-brutal-primary)] hover:border-transparent transition-all uppercase">
            VIEW ALL PRODUCTS
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURED_PRODUCTS.map((product, index) => (
            <div 
              key={product.id} 
              className="group relative brutal-card p-4 bg-[var(--color-brutal-bg)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-[3/4] overflow-hidden relative mb-6 border-3 border-black">
                <div className="absolute inset-0 bg-[var(--color-brutal-primary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
                
                {/* Quick Add Button - Brutalist */}
                <button className="absolute bottom-0 left-0 right-0 py-4 bg-black text-white text-lg font-bold tracking-widest uppercase opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 hover:bg-[var(--color-brutal-secondary)] hover:text-black border-t-3 border-black">
                  Quick Add
                </button>
              </div>
              
              <div className="flex justify-between items-start border-t-3 border-black pt-4">
                <div>
                  <h4 className="text-xl font-bold uppercase mb-1">{product.name}</h4>
                  <p className="text-gray-600 font-mono text-sm">Limited Edition</p>
                </div>
                <span className="text-xl font-black bg-black text-white px-2 py-1">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Link to="/products" className="brutal-btn inline-block">
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
}
