// Infinite horizontal scrolling logo ticker — pure CSS animation, no JS needed.
export default function LogoTicker() {
  const logos = [
    { type: 'text' as const, label: 'LALANTIK' },
    { type: 'badge' as const, label: 'ARTBID' },
  ];

  // Duplicate enough times for a seamless loop
  const items = Array.from({ length: 8 }, (_, i) => logos[i % logos.length]);

  return (
    <section className="overflow-hidden border-t border-[#2C3B4E] bg-[#1B2632] py-8">
      <div className="logo-ticker-track flex w-max items-center gap-16">
        {/* Two identical sets for seamless infinite loop */}
        {[0, 1].map((setIndex) => (
          <div key={setIndex} className="flex shrink-0 items-center gap-16">
            {items.map((item, i) => (
              <div key={`${setIndex}-${i}`} className="flex shrink-0 items-center">
                {item.type === 'text' ? (
                  <span
                    className="select-none whitespace-nowrap text-[42px] font-bold italic tracking-wider text-[#FFB162] sm:text-[52px]"
                    style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}
                  >
                    {item.label}
                  </span>
                ) : (
                  <span className="flex select-none items-center gap-2 rounded-xl bg-[#6C5CE7]/90 px-5 py-3 text-[28px] font-extrabold tracking-wide text-white shadow-[0_4px_16px_rgba(108,92,231,0.3)] sm:text-[36px]">
                    <span className="leading-none">ART</span>
                    <span className="leading-none">B<span className="text-[#FFD93D]">i</span>D</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
