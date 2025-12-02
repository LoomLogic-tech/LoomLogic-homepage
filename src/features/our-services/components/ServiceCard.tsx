import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { ServiceItem } from "./service-data";

export default function ServiceCard({ title, icon, features }: ServiceItem) {
  return (
    <Card className="bg-[#2C3B4E1F] border border-[#70747E] rounded-2xl shadow-xl max-h-[548px]">
      <CardContent className="px-5 py-4 space-y-2">
        
        {/* Icon */}
        <div className="flex justify-center">
          <Image src={icon} alt={`${title} icon`} width={140} height={140} />
        </div>

        {/* Title */}
        <h3 className="text-center text-[32px] font-bold text-orange-300">
          {title}
        </h3>

        {/* Feature List */}
        <ul className="text-gray-300 text-[20px] font-normal space-y-2 text-left">
          {features.map((text, i) => (
            <li key={i} className="list-disc list-outside ml-8 leading-relaxed text-gray-300">
              {text}
            </li>
          ))}
        </ul>

      </CardContent>
    </Card>
  );
}
