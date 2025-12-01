import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

export type NavLink = {
  label: string;
  href: string;
};

type MainNavbarProps = {
  brand?: string;
  links: NavLink[];
};

const MainNavbar = ({ brand = 'LOOMLOGIC', links }: MainNavbarProps) => {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex justify-center px-4 pt-4 sm:px-6">
      <div className="relative w-full max-w-[1280px]">
        <div className="flex items-center justify-between rounded-[8px] bg-[linear-gradient(255deg,rgba(44,59,78,0.20)_15.53%,var(--Primary-Pri-2,rgba(163,81,57,0.20))_192.96%)] px-6 py-2 shadow-[0_4px_15px_0_var(--sds-color-background-brand-hover)] backdrop-blur-md">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center">
            <img
              src="/share/navbar-logo.png"
              alt="LoomLogic logo"
              style={{ width: '145px', height: '48px' }}
              className="object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-4 text-sm font-normal text-slate-100 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-wide text-slate-200/90 transition hover:text-[#FFB162]"
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-[8px] border-[1.2px] border-[#FFB162] bg-transparent p-2 text-xs font-normal text-[#EEE9DF] hover:bg-[#E8E9EB]/[0.08] hover:text-[#EEE9DF]"
            >
              <Link href="#contact">Contact us</Link>
            </Button>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-orange-500 px-3 py-1 text-xs font-normal text-slate-950 hover:bg-orange-400"
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
