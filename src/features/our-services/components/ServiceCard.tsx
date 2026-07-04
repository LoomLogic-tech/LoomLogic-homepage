import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { ServiceItem } from "./service-data";

export default function ServiceCard({ title, icon, features }: ServiceItem) {
  return (
    <Card className="h-full min-h-[548px] rounded-[18px] border border-[#70747E] bg-[#2C3B4E1F] py-0 text-white shadow-[0_14px_18px_rgba(4,10,18,0.42)]">
      <CardContent className="flex h-full flex-col px-7 pb-7 pt-[52px] sm:px-8 lg:px-[27px]">
        <div className="flex justify-center">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={118}
            height={118}
            className="h-[118px] w-[118px] object-contain"
          />
        </div>

        <h3 className="mt-[33px] text-center text-[32px] font-bold leading-tight text-[#FFB162]">
          {title}
        </h3>

        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-left text-[21px] font-normal leading-[1.72] text-white marker:text-[10px] marker:text-white sm:pl-6">
          {features.map((text, i) => (
            <li key={i} className="pl-1">
              {text}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
