import MainNavbarContainer from '@/features/main-part/containers/MainNavbarContainer';
import HeroSectionContainer from '@/features/main-part/containers/HeroSectionContainer';

// Top-level page for the "main-part" route, assembling navbar and hero.
export default function MainPartPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="relative z-10 min-h-screen">
        <MainNavbarContainer />
        <main className="pt-6">
          <HeroSectionContainer />
          {/* section อื่นๆ ใส่ตรงนี้เด้อสู */}
        </main>
      </div>
    </div>
  );
}
