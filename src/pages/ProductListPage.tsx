import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductList from '../components/product/ProductList';
import AnimationProvider from '../AnimationProvider';

export default function ProductListPage() {
  return (
    <AnimationProvider>
      <div className="bg-[var(--color-brutal-bg)] min-h-screen text-black">
        <Navbar />
        <div className="pt-32 px-6 max-w-7xl mx-auto min-h-[60vh] pb-20">
          <div className="mb-16 text-center" data-aos="fade-down">
            <h1 className="font-display text-6xl md:text-8xl mb-6 font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-800 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">The Collection</h1>
            <p className="text-black text-xl font-mono font-bold max-w-3xl mx-auto border-3 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white transform -rotate-1">
              EXPLORE OUR CURATED SELECTION OF RAW, UNFILTERED PRODUCTS. DESIGNED FOR THE BOLD.
            </p>
          </div>
          
          <ProductList />
        </div>
        <Footer />
      </div>
    </AnimationProvider>
  );
}
