import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CarouselControls() {
  return (
    <div className="flex items-center gap-4 mt-6">
      <Button variant="ghost" size="icon" className="text-[#9DA0A7] hover:bg-transparent hover:text-white cursor-pointer">
        <ChevronLeft />
      </Button>

      <Button variant="ghost" size="icon" className="text-[#9DA0A7] hover:bg-transparent hover:text-white cursor-pointer">
        <ChevronRight />
      </Button>
    </div>
  );
}
