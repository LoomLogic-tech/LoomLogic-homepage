import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';

// เช็ค Path ให้ถูกนะครับ ว่า ContactModal อยู่โฟลเดอร์ไหน
import ContactModal from '@/features/main-part/components/ContactModal';

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
        {/* Navbar Container */}
        <div className="flex items-center justify-between rounded-[8px] bg-[linear-gradient(255deg,rgba(44,59,78,0.20)_15.53%,var(--Primary-Pri-2,rgba(163,81,57,0.20))_192.96%)] px-6 py-2 shadow-[0_4px_15px_0_var(--sds-color-background-brand-hover)] backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/share/navbar-logo.png"
              alt={`${brand} logo`}
              style={{ width: '145px', height: '48px' }}
              className="object-contain"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
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

            {/* [4] เรียกใช้ ContactModal สำหรับ Desktop และส่งปุ่มแบบเล็กเข้าไป */}
            <ContactModal
              triggerButton={
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-[8px] border-[1.2px] border-[#FFB162] bg-transparent px-4 py-2 text-xs font-normal text-[#EEE9DF] hover:bg-[#E8E9EB]/[0.08] hover:text-[#EEE9DF]"
                >
                  Contact us
                </Button>
              }
            />
          </nav>

          {/* ================= MOBILE NAV ================= */}
          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9 text-slate-200 hover:bg-slate-800/50 hover:text-white"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="top"
                className="
                  flex flex-col justify-start items-start
                  w-full max-w-[375px] 
                  h-auto
                  mx-auto mt-4 
                  px-6 py-6
                  rounded-[8px]
                  bg-[linear-gradient(255deg,#2C3B4E_15.53%,#A35139_192.96%)]
                  shadow-[0_4px_15px_0_var(--sds-color-background-brand-hover)]
                  border-none outline-none focus:outline-none ring-0
                  text-slate-100
                  [&>button]:hidden
                "
              >
                <SheetTitle className="sr-only">
                  Mobile Navigation Menu
                </SheetTitle>

                <div className="w-full">
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <img
                        src="/share/navbar-logo.png"
                        alt={`${brand} logo`}
                        style={{ width: '145px', height: '48px' }}
                        className="object-contain"
                      />
                    </div>

                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-300 hover:text-white -mr-2"
                      >
                        <X className="h-6 w-6" />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Links + Contact Button */}
                  <div className="flex flex-col gap-5 px-1">
                    {links.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-base font-normal text-slate-200 hover:text-[#FFB162] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}

                    {/* [5] เรียกใช้ ContactModal สำหรับ Mobile (ไม่ต้องส่ง Prop ใช้ Default ปุ่มใหญ่) */}
                    <ContactModal />
                  </div>
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
