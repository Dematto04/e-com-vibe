import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[var(--color-brutal-bg)] pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brutal-text)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center" data-aos="fade-up" data-aos-duration="1000">
        <div className="bg-[var(--color-brutal-primary)] border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 mb-8 rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
          <h2 className="text-black text-xl font-bold tracking-widest uppercase">The New Collection</h2>
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-black mb-8 leading-none uppercase font-black tracking-tighter drop-shadow-[4px_4px_0px_rgba(255,0,255,1)]">
          RAW <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brutal-accent)] to-[var(--color-brutal-secondary)] stroke-black stroke-2" style={{ WebkitTextStroke: '3px black' }}>AESTHETIC</span>
        </h1>
        
        <p className="text-black text-xl md:text-2xl font-bold font-mono mb-12 max-w-3xl mx-auto leading-relaxed bg-white border-3 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          UNAPOLOGETIC DESIGN. BOLD CHOICES. <br/>
          WEAR THE VIBE.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Link 
            to="/products" 
            className="brutal-btn text-xl px-10 py-5 hover:bg-[var(--color-brutal-secondary)]"
          >
            Shop Collection
          </Link>
          
          <Link 
            to="/story" 
            className="px-10 py-5 bg-white text-black border-3 border-black font-bold text-xl uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
          >
            View Lookbook
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-black transform skew-y-2 origin-bottom-left z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[var(--color-brutal-primary)] transform -skew-y-1 origin-bottom-right z-0"></div>
    </section>

  );
}
