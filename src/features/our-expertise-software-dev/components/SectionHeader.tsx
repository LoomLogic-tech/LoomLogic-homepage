export default function SectionHeader() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pt-[68px] sm:px-6 lg:px-0">
      <div className="flex items-center gap-4">
        <span className="rounded-full bg-[linear-gradient(180deg,rgba(44,59,78,0.9)_0%,rgba(255,177,98,0.25)_180%)] px-[25px] py-[15px] text-[23px] font-semibold leading-none text-white shadow-[0_8px_14px_rgba(4,10,18,0.32),0_1px_0_#FFB162]">
          Our Expertise
        </span>
      </div>

      <h1 className="mt-9 text-[42px] font-semibold leading-tight text-white sm:text-5xl lg:text-[50px]">
        Software <span className="text-[#FFB162]">Development</span>
      </h1>

      <p className="mt-4 max-w-[885px] text-[18px] font-normal leading-[1.05] text-[#B5B8C0] sm:text-[20px]">
        We delivers innovation that empowers your business. With strategic
        insights and seamless execution, we turn ideas into impactful digital
        realities. Step into the future
      </p>

      <div className="mt-[25px] border-b border-[#2C3B4E]" />
    </section>
  );
}
