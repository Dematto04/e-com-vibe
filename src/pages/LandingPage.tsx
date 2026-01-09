import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/landing/HeroSection';
import ProductShowcase from '../components/landing/ProductShowcase';
import StorySection from '../components/landing/StorySection';
import MembershipCTA from '../components/landing/MembershipCTA';
import Footer from '../components/layout/Footer';
import AnimationProvider from '../AnimationProvider';

export default function LandingPage() {
  return (
    <AnimationProvider>
      <div className="bg-[var(--color-brutal-bg)] min-h-screen text-black font-sans selection:bg-[var(--color-brutal-primary)] selection:text-black">
        <Navbar />
        <main>
          <HeroSection />
          <ProductShowcase />
          <StorySection />
          <MembershipCTA />
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  );
}
