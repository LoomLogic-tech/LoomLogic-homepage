import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  text: string;
  image: string;
  phoneImage?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export default function ProjectCard({
  title,
  image,
  phoneImage,
  className,
  imageClassName,
  priority = false,
}: Props) {
  return (
    <div className={cn('relative w-full', className)}>
      <div className="relative overflow-hidden rounded-[8px] shadow-[0_12px_24px_rgba(4,10,18,0.35)]">
        <Image
          src={image}
          alt={title}
          width={900}
          height={500}
          priority={priority}
          className={cn('h-full w-full object-cover', imageClassName)}
        />
      </div>

      {phoneImage && (
        <div className="absolute bottom-[-2px] right-[-6%] h-[110%] w-[43%] min-w-[180px] drop-shadow-[0_18px_26px_rgba(4,10,18,0.45)] sm:right-[-9%] lg:right-[-8%]">
          <Image
            src={phoneImage}
            alt="phone"
            fill
            sizes="(min-width: 1024px) 330px, 40vw"
            className="object-contain"
          />
        </div>
      )}
    </div> 
  );
}
