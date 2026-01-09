export default function StorySection() {
  return (
    <section className="py-24 bg-[var(--color-brutal-bg)] overflow-hidden border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <div className="relative aspect-[4/5] overflow-hidden border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="https://images.unsplash.com/photo-1618932260643-2b672a8d3107?q=80&w=2000&auto=format&fit=crop" 
                alt="Artisan Craftsmanship" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-left">
            <h2 className="bg-[var(--color-brutal-secondary)] text-black inline-block px-2 py-1 text-lg font-bold tracking-widest uppercase mb-6 transform rotate-1">Our Heritage</h2>
            <h3 className="font-display text-5xl md:text-7xl text-black mb-8 leading-none uppercase font-black tracking-tighter">
              Crafted for the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brutal-primary)] to-[var(--color-brutal-accent)]" style={{ WebkitTextStroke: '2px black' }}>Extraordinary</span>
            </h3>
            <p className="text-black text-lg font-mono leading-relaxed mb-8 border-l-4 border-black pl-4">
              Every stitch tells a story. Our journey began with a simple philosophy: true luxury lies in the details. 
              We collaborate with master artisans from around the globe to bring you pieces that are not just worn, but experienced.
            </p>
            <a href="/story" className="brutal-btn inline-block">
              READ THE FULL STORY
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 md:pr-12 text-right md:text-left" data-aos="fade-right">
            <h2 className="bg-[var(--color-brutal-accent)] text-white inline-block px-2 py-1 text-lg font-bold tracking-widest uppercase mb-6 transform -rotate-1">Sustainability</h2>
            <h3 className="font-display text-5xl md:text-7xl text-black mb-8 leading-none uppercase font-black tracking-tighter">
              Conscious <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brutal-secondary)] to-[var(--color-brutal-primary)]" style={{ WebkitTextStroke: '2px black' }}>Luxury</span>
            </h3>
            <p className="text-black text-lg font-mono leading-relaxed mb-8 border-l-4 border-black pl-4">
              We believe that beauty should not come at the cost of our planet. 
              Our commitment to sustainable sourcing and ethical production ensures that your style leaves a positive legacy.
            </p>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="relative aspect-[4/5] overflow-hidden border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
                alt="Sustainable Fashion" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
