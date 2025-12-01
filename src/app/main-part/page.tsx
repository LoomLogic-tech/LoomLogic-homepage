import NeuralBackgroundContainer from "@/features/main-part/containers/neural-background-container";
import MainNavbarContainer from "@/features/main-part/containers/main-navbar-container";
import HeroSectionContainer from "@/features/main-part/containers/hero-section-container";

export default function MainPartPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <NeuralBackgroundContainer />

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
