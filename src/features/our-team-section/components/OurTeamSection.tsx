'use client';

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

/* ─── Team member data ─── */
const teamMembers = [
  { name: 'Narawish Kophimai', role: 'Product Owner', image: '/team/narawish.jpg' },
  { name: 'Nuntakarn Paonariang', role: 'Business Analyst', image: '/team/pure.png' },
  { name: 'Pramin Wangwun', role: 'Full stack developer', image: '/team/owen.jpg' },
  { name: 'Thanathorn Chulay', role: 'Full stack developer / QA', image: '/team/petch.png' },
  { name: 'Irin Maysasittiroj', role: 'Full stack developer', image: '/team/view.jpg' },
  { name: 'Parichat Hongsa', role: 'Frontend developer', image: '/team/donut.jpg' },
  { name: 'Florence Ferrara', role: 'Backend developer', image: '/team/florence.png' },
  { name: 'Thanaporn Worasan', role: 'Backend developer', image: '/team/ball.jpg' },
  { name: 'Noppon Changchai', role: 'UX/UI Designer', image: '/team/nop.jpg' },
  { name: 'Wichayoot Wongsason', role: 'Graphic Designer', image: '/team/shi-ryu.jpg' },
];

export default function OurTeamSection() {
  return (
    <section
      id="team"
      className="w-full bg-[#1B2632] pb-24 pt-16 text-white"
    >
      {/* ─── Top divider ─── */}
      <div className="mx-auto mb-14 max-w-[1280px] border-t border-[#FFB162]/40" />

      {/* ─── Heading ─── */}
      <div className="mx-auto max-w-[1280px] text-center">
        <h2 className="text-5xl font-semibold text-white">
          Our <span className="text-[#FFB162]">Team</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-relaxed text-[#C9CACE] sm:text-[18px]">
          Behind every great solution is a team of passionate engineers,
          designers, and thinkers. At Loomlogic, we blend technical expertise
          with creative insight to transform complex ideas into smooth,
          meaningful digital experiences.
        </p>
      </div>

      {/* ─── Team Carousel ─── */}
      <div className="mx-auto mt-12 flex max-w-[1380px] items-center gap-2 px-2 sm:gap-4 sm:px-4">
        {/* ปุ่มซ้าย */}
        <button
          className="team-swiper-prev flex h-[27.5rem] w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-[rgba(232,233,235,0.08)]"
          aria-label="Previous team members"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#9DA0A7] transition-colors hover:text-[#FFB162]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Swiper */}
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          slidesPerGroup={1}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.team-swiper-prev',
            nextEl: '.team-swiper-next',
          }}
          loop={true}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            480: { slidesPerView: 2, slidesPerGroup: 2 },
            768: { slidesPerView: 3, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 2, spaceBetween: 28 },
          }}
          className="w-full"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.name}>
              <div className="relative overflow-hidden rounded-xl">
                {/* Photo */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[27.5rem] w-full object-cover"
                  loading="lazy"
                />

                {/* Name overlay */}
                <div className="absolute bottom-3 left-0 w-[70%] rounded-r-xl border-l-[3px] border-[#FFB162] bg-[#1B2632]/72 px-3 py-2 text-left backdrop-blur-sm">
                  <p className="text-[15px] font-bold leading-tight text-[#FFB162]">
                    {member.name}
                  </p>
                  <div className="my-1 border-t border-[#E8E9EB]/8" />
                  <p className="text-[13px] font-medium text-[#EEE9DF]">
                    {member.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ปุ่มขวา */}
        <button
          className="team-swiper-next flex h-[27.5rem] w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-[rgba(232,233,235,0.08)]"
          aria-label="Next team members"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#9DA0A7] transition-colors hover:text-[#FFB162]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
