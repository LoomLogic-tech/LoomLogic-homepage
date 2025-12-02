export default function SectionHeader() {
  return (
    <div className="max-w-7xl mx-auto pt-5 pb-[65px]">

      {/* Row: Badge + Line */}
      <div className="flex items-center gap-4 mb-6">

        {/* Badge */}
        <span className="bg-[linear-gradient(180.79deg,rgba(44,59,78,0.4)_0.68%,rgba(255,177,98,0.4)_221.81%)] 
          text-white px-6 py-3 rounded-full text-2xl font-semibold shadow-md">
          Our Expertises
        </span>

        {/* Orange Line */}
        <div className="flex-1 border-t border-[#FFB162]" />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-semibold text-white">
        Software <span className="text-[#FFB162]">Development</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-[#9DA0A7] max-w-4xl text-[20px]">
        We delivers innovation that empowers your business. With strategic
        insights and seamless execution, we turn ideas into impactful digital
        realities. Step into the future.
      </p>

      {/* Bottom divider */}
      <div className="border-b border-[#2C3B4E] mt-8"></div>
    </div>
  );
}
