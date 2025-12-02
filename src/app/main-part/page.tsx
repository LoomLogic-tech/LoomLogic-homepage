import MainNavbarContainer from '@/features/main-part/containers/main-navbar-container';
import HeroSectionContainer from '@/features/main-part/containers/hero-section-container';
import ServicesSection from '@/features/our-services/components/ServicesSection';
import ProjectShowcase from '@/features/our-expertise-software-dev/components/ProjectShowcase';
import SectionHeader from '@/features/our-expertise-software-dev/components/SectionHeader';

export default function MainPartPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#1B2632] text-slate-50">
      <div className="relative z-10 min-h-screen">
        <MainNavbarContainer />
        <main>
          <HeroSectionContainer />
          {/* section อื่นๆ ใส่ตรงนี้เด้อสู */}
          <section className="relative -mt-5 overflow-hidden rounded-t-3xl text-black">
            <ServicesSection />
            {/* Header */}
            <SectionHeader />

            {/* Project Showcase */}
            <ProjectShowcase />
          </section>
        </main>
      </div>
    </div>
  );
}
