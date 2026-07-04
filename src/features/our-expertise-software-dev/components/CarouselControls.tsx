import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CarouselControls() {
  return (
    <div className="mt-9 flex items-center justify-center gap-8">
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 cursor-pointer text-[#9DA0A7] hover:bg-transparent hover:text-white"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-6 w-6" strokeWidth={2.25} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 cursor-pointer text-[#9DA0A7] hover:bg-transparent hover:text-white"
        aria-label="Next project"
      >
        <ChevronRight className="h-6 w-6" strokeWidth={2.25} />
      </Button>
    </div>
  );
}
