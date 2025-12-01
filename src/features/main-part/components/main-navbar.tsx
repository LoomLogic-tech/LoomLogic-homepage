import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export type NavLink = {
  label: string;
  href: string;
};

type MainNavbarProps = {
  brand?: string;
  links: NavLink[];
};

const MainNavbar = ({ brand = "LOOMLOGIC", links }: MainNavbarProps) => {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex justify-center px-4 pt-4 sm:px-6">
      <div className="relative w-full max-w-5xl">
        <div className="flex h-14 items-center justify-between rounded-2xl bg-slate-900/90 px-4 shadow-lg shadow-black/60 ring-1 ring-slate-800/80 backdrop-blur-md sm:px-6">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-500/40">
              <span className="text-lg font-black text-slate-950">Ø</span>
            </div>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.35em] text-slate-100 sm:inline">
              {brand}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-100 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-wide text-slate-200/90 transition hover:text-orange-300"
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full border border-orange-400/80 bg-transparent px-4 py-1 text-xs font-semibold text-orange-300 hover:bg-orange-500/10 hover:text-orange-200"
            >
              <Link href="#contact">Contact us</Link>
            </Button>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-slate-950 hover:bg-orange-400"
            >
              <Link href="#contact">Contact</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-9 w-9 rounded-full border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-slate-950/95 border-slate-800"
              >
                <SheetHeader>
                  <SheetTitle className="text-left text-orange-300">
                    {brand}
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-3 text-sm font-medium text-slate-100">
                  {links.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-md px-2 py-1.5 transition hover:bg-slate-800/70"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
