'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

// Interface สำหรับรับปุ่ม Trigger จากภายนอก (เพื่อให้ Navbar ส่งปุ่มแบบต่างๆ เข้ามาได้)
interface ContactModalProps {
  triggerButton?: React.ReactNode;
}

export default function ContactModal({ triggerButton }: ContactModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleBack = () => {
    setIsSuccess(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* ถ้ามี prop triggerButton ส่งมาให้ใช้ปุ่มนั้น ถ้าไม่มีให้ใช้ปุ่ม Default */}
        {triggerButton ? (
          triggerButton
        ) : (
          <Button className="w-full rounded-xl border border-[#FFB162] bg-transparent py-6 text-base font-normal text-[#EEE9DF] hover:bg-[#FFB162]/10 transition-colors">
            Contact us
          </Button>
        )}
      </DialogTrigger>

      <DialogContent
        className="
          /* [KEY] Z-Index สูงเพื่อให้ทับ Navbar */
          z-[100]

          /* Position Fixed Center */
          fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
          
          /* Size - Mobile */
          w-[375px] h-[683px] 
          
          /* Size - Desktop */
          md:w-[800px] md:max-w-[90vw] md:h-[600px] 
          
          /* [KEY] Styling & Layout เพื่อลบช่องว่างขาว */
          rounded-[16px] 
          p-0            /* ลบ Padding ของ Dialog ออกเพื่อให้เนื้อหาชิดขอบ */
          border-none 
          shadow-2xl
          flex           /* ใช้ Flex เพื่อวางซ้ายขวา */
          gap-0          /* ลบช่องว่างระหว่าง Flex item */
          overflow-hidden /* ตัดมุมโค้งของลูกๆ ให้โค้งตาม rounded-[16px] ของแม่ */
          focus:outline-none 
          
          /* ซ่อนปุ่ม X Default */
          [&>button]:hidden
        "
      >
        <DialogTitle className="sr-only">Contact Form</DialogTitle>

        {/* ================= LEFT SIDE (Form Section) ================= */}
        {/* ใส่ z-10 เพื่อให้แน่ใจว่า Layer อยู่เหนือพื้นหลังถ้ามี Shadow */}
        <div className="w-full md:w-1/2 h-full bg-[#2C3B4E] p-6 md:p-8 flex flex-col relative z-10">
          {/* Mobile Close Button (ซ่อนบน Desktop) */}
          <div className="absolute top-4 right-4 md:hidden z-10">
            <DialogClose asChild>
              <button className="text-slate-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </DialogClose>
          </div>

          {!isSuccess ? (
            /* --- FORM STATE --- */
            <div className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-300">
              <div className="mb-2 mt-2 md:mt-0">
                <h2 className="text-2xl font-semibold text-white">
                  Contact us
                </h2>
              </div>
              <p className="text-xs text-slate-300 mb-6 font-light opacity-80 leading-relaxed">
                For all inquiries or collaboration opportunities, please use the
                form below or the contact details provided.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 flex-1"
              >
                {/* Fullname */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none">
                    <Image
                      src="/icons/user.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="w-full h-full object-contain opacity-60 group-focus-within:opacity-100 transition-opacity"
                    />
                  </div>
                  <Input
                    required
                    placeholder="Fullname"
                    className="pl-12 py-6 bg-transparent border-slate-600 rounded-xl text-slate-100 placeholder:text-slate-400 focus-visible:ring-[#FFB162] focus-visible:border-[#FFB162]"
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none">
                    <Image
                      src="/icons/mail.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="w-full h-full object-contain opacity-60 group-focus-within:opacity-100 transition-opacity"
                    />
                  </div>
                  <Input
                    required
                    placeholder="Email address"
                    type="email"
                    className="pl-12 py-6 bg-transparent border-slate-600 rounded-xl text-slate-100 placeholder:text-slate-400 focus-visible:ring-[#FFB162] focus-visible:border-[#FFB162]"
                  />
                </div>

                {/* Detail */}
                <div className="relative flex-1 group">
                  <div className="absolute left-4 top-4 w-5 h-5 pointer-events-none">
                    <Image
                      src="/icons/doc.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="w-full h-full object-contain opacity-60 group-focus-within:opacity-100 transition-opacity"
                    />
                  </div>
                  <Textarea
                    required
                    placeholder="Detail"
                    className="pl-12 py-4 h-full min-h-[100px] resize-none bg-transparent border-slate-600 rounded-xl text-slate-100 placeholder:text-slate-400 focus-visible:ring-[#FFB162] focus-visible:border-[#FFB162]"
                  />
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-3 pt-4">
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="md:hidden w-full py-6 rounded-xl border-[#FFB162] text-[#FFB162] hover:bg-[#FFB162]/10 bg-transparent hover:text-[#FFB162]"
                    >
                      Back
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    className="w-full py-6 rounded-xl bg-[#FFB162] text-slate-900 hover:bg-[#ffa040] font-semibold transition-colors"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            /* --- SUCCESS STATE --- */
            <div className="flex flex-col h-full items-center justify-center text-center relative animate-in fade-in zoom-in-95 duration-300">
              <div className="mb-6 w-20 h-20 flex items-center justify-center">
                <Image
                  src="/icons/success.gif"
                  alt="Success"
                  width={80}
                  height={80}
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,177,98,0.3)]"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#FFB162] mb-4 tracking-wide">
                Success!
              </h3>
              <p className="text-sm text-slate-300 mb-12 max-w-[280px] leading-relaxed opacity-90">
                Your inquiry is on its way. We appreciate you reaching out. We
                are working to get back to you as quickly as possible.
              </p>
              <div className="mt-auto w-full pb-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="w-full py-6 rounded-xl border-[#FFB162] text-[#FFB162] hover:bg-[#FFB162]/10 bg-transparent hover:text-[#FFB162]"
                >
                  Back
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* ================= RIGHT SIDE (Desktop Only) ================= */}
        <div className="hidden md:flex w-1/2 h-full relative items-center justify-center">
          {/* Gradient Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'linear-gradient(180deg, var(--Background-Bg-1, #1B2632) 0%, #A35139 100%)',
            }}
          />

          {/* Desktop Close Button */}
          <div className="absolute top-6 right-6 z-20">
            <DialogClose asChild>
              <button className="text-slate-300 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full p-2">
                <X className="w-6 h-6" />
              </button>
            </DialogClose>
          </div>

          {/* Center Decoration Image */}
          <div className="relative z-10">
            <Image
              src="/share/logo.png"
              alt="Contact Decoration"
              width={201}
              height={193}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
