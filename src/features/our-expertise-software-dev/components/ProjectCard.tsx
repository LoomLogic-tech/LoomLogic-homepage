import Image from "next/image";

interface Props {
  title: string;
  text: string;
  image: string;
  phoneImage?: string;
}

export default function ProjectCard({ title, text, image, phoneImage }: Props) {
  return (
    <div className="relative w-full">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <Image src={image} alt={title} width={900} height={500} />
      </div>

      {phoneImage && (
        <div className="absolute -right-10 -bottom-8 w-[260px] h-[520px] drop-shadow-xl">
          <Image
            src={phoneImage}
            alt="phone"
            width={260}
            height={800}
            className="rounded-xl object-cover"
          />
        </div>
      )}
    </div>
  );
}
