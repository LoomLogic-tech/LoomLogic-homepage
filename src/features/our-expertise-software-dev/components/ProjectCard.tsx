import Image from 'next/image';

interface Props {
  title: string;
  text: string;
  image: string;
  phoneImage?: string;
}

export default function ProjectCard({ title, text, image, phoneImage }: Props) {
  return (
    <div className="relative w-full">
      <div className="rounded-xl overflow-hidden shadow-lg ">
        <Image src={image} alt={title} width={900} height={500} />
      </div>

      {phoneImage && (
        <div className="absolute -right-10 -bottom-1 w-[330px] h-[500px] drop-shadow-xl">
          <Image
            src={phoneImage}
            alt="phone"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}
    </div> 
  );
}
