import NeuralBackgroundContainer from '@/features/main-part/containers/NeuralBackgroundContainer';

// Hero banner with glowing background and headline copy.
const HeroSection = () => {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden px-4 pb-20 pt-24 sm:px-6">
      {/* <NeuralBackgroundContainer /> */}

      <div className="relative  flex  flex-col items-center gap-3 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="mx-auto h-56 w-[120%] max-w-4xl rounded-full bg-gradient-to-r from-orange-500/15 via-orange-300/8 to-orange-500/10 blur-3xl" />
        </div>

        <p className="text-balance text-[40px] font-semibold tracking-tight text-white md:text-[64px]">
          Where <span className="font-bold text-[#FFB162]">logic</span> meets{' '}
          <span className="font-bold text-[#FFB162]">creativity</span>
        </p>

        <div className="mt-6 max-w-xl text-balance text-base leading-relaxed text-[#EEE9DF] md:text-xl">
          <p>We deliver innovation that empowers your business. With</p>
          <p>strategic insights and seamless execution, we turn ideas into</p>
          <p>impactful digital realities. Step into the future.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
