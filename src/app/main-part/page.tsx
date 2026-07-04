import MainNavbarContainer from '@/features/main-part/containers/main-navbar-container';
import HeroSectionContainer from '@/features/main-part/containers/hero-section-container';
import ServicesSection from '@/features/our-services/components/ServicesSection';

// Top-level page for the "main-part" route, assembling navbar and hero.
export default function MainPartPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-slate-50">
      <div className="relative z-10 min-h-screen">
        <MainNavbarContainer />
        <main>
          <HeroSectionContainer />
          {/* section อื่นๆ ใส่ตรงนี้เด้อสู */}
          <section className="relative -mt-5 overflow-hidden rounded-t-3xl text-black">
            <ServicesSection />
          </section>
        </main>
      </div>
    </div>
  );
}
