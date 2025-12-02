import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CarouselControls() {
  return (
    <div className="flex items-center gap-4 mt-6">
      <Button variant="outline" size="icon" className="rounded-full">
        <ChevronLeft />
      </Button>

      <Button variant="outline" size="icon" className="rounded-full">
        <ChevronRight />
      </Button>
    </div>
  );
}
