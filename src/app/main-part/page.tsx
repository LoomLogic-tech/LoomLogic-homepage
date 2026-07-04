import MainNavbarContainer from '@/features/main-part/containers/MainNavbarContainer';
import HeroSectionContainer from '@/features/main-part/containers/HeroSectionContainer';
import ServicesSection from '@/features/our-services/components/ServicesSection';
import ProjectShowcase from '@/features/our-expertise-software-dev/components/ProjectShowcase';
import SectionHeader from '@/features/our-expertise-software-dev/components/SectionHeader';

// Top-level page for the "main-part" route, assembling navbar and hero.
export default function MainPartPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#1B2632] text-slate-50">
      <div className="relative z-10 min-h-screen">
        <MainNavbarContainer />
        <main>
          <HeroSectionContainer />
          {/* section อื่นๆ ใส่ตรงนี้เด้อสู */}
          <section className="relative -mt-5 overflow-hidden rounded-t-3xl bg-[#1B2632] text-white">
            <ServicesSection />
            <SectionHeader />

            <ProjectShowcase />
          </section>
        </main>
      </div>
    </div>
  );
}
