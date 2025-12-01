const HeroSection = () => {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center px-4 pb-20 pt-24 sm:px-6">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="mx-auto h-56 w-[120%] max-w-4xl rounded-full bg-gradient-to-r from-orange-500/15 via-orange-300/8 to-orange-500/10 blur-3xl" />
        </div>

        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
          Where{" "}
          <span className="font-bold text-orange-400">logic</span> meets{" "}
          <span className="font-bold text-orange-400">creativity</span>
        </h1>

        <p className="mt-6 max-w-xl text-balance text-xs leading-relaxed text-slate-200/80 sm:text-sm">
          We deliver innovation that empowers your business. With strategic
          insights and seamless execution, we turn ideas into impactful digital
          realities. Step into the future.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
