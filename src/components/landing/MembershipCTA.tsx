export default function MembershipCTA() {
  return (
    <section className="relative py-40 flex items-center justify-center overflow-hidden bg-[var(--color-brutal-primary)] border-t-4 border-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      {/* Brutalist Card Content */}
      <div 
        className="relative z-10 max-w-4xl mx-6 p-12 md:p-16 text-center bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        data-aos="zoom-in"
      >
        <h2 className="bg-black text-white inline-block px-4 py-2 text-xl font-bold tracking-[0.2em] uppercase mb-8 transform -rotate-2">VIBE Private</h2>
        <h3 className="font-display text-5xl md:text-7xl text-black mb-8 font-black uppercase tracking-tighter">
          Unlock the <span className="text-[var(--color-brutal-secondary)] underline decoration-4 decoration-black underline-offset-8">Exclusive</span>
        </h3>
        <p className="text-black text-xl font-mono mb-12 font-bold leading-relaxed max-w-2xl mx-auto">
          Join our private membership for early access to limited collections, 
          personal styling consultations, and invitations to exclusive events.
        </p>
        
        <form className="flex flex-col md:flex-row gap-6 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="YOUR EMAIL ADDRESS" 
            className="flex-1 bg-[var(--color-brutal-bg)] border-3 border-black py-4 px-6 text-black font-bold placeholder-gray-500 focus:outline-none focus:bg-[var(--color-brutal-secondary)] transition-colors uppercase"
          />
          <button className="brutal-btn whitespace-nowrap">
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
}
