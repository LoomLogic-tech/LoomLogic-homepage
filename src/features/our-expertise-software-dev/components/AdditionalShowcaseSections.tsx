import Image from 'next/image';

export default function AdditionalShowcaseSections() {
  return (
    <>
      <section className="overflow-hidden bg-[#1B2632]">
        <Image
          src="/assets/figma/design-creativity.png"
          alt="Design and Creativity"
          width={1440}
          height={900}
          className="h-auto w-full"
          sizes="100vw"
        />
      </section>

      <section className="overflow-hidden bg-[#1B2632]">
        <Image
          src="/assets/figma/logo-strip.png"
          alt="Partner logo showcase"
          width={1440}
          height={175}
          className="h-auto w-full"
          sizes="100vw"
        />
      </section>

      <section id="team" className="overflow-hidden bg-[#1B2632] pb-24">
        <Image
          src="/assets/figma/team-heading.png"
          alt="Our Team"
          width={1440}
          height={209}
          className="h-auto w-full"
          sizes="100vw"
        />
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-0">
          <Image
            src="/assets/figma/team-carousel.png"
            alt="Loomlogic team members"
            width={1380}
            height={440}
            className="h-auto w-full"
            sizes="(min-width: 1380px) 1380px, 100vw"
          />
        </div>
      </section>
    </>
  );
}
