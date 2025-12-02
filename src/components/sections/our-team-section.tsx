'use client';

import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function OurTeamSection() {
  return (
    <section className="w-full text-white flex gap-14 bg-[#1B2632]">
      <div className="container mx-auto text-center">
        {/* ข้อความ */}
        <h2 className="text-white text-5xl font-semibold mb-7">
          Our <span className="text-[#FFB162]">Team</span>
        </h2>
        <div id="team-text" className="text-[#C9CACE] text-xl">
          <p>
            Behind every great solution is a team of passionate engineers,
            designers, and
          </p>
          <p>
            thinkers. At Loomlogic, we blend technical expertise with creative
            insight to
          </p>
          <p>
            transform complex ideas into smooth, meaningful digital experiences.
          </p>
        </div>

        {/* โปรไฟล์ทีม */}
        <div
          id="team-profile"
          className="flex items-center justify-center gap-6 m-4"
        >
          {/* ปุ่มซ้าย */}
          <button
            className="swiper-prev hover:bg-[rgba(232,233,235,0.08)] hover:cursor-pointer p-2 text-4xl rounded-lg w-[2.5rem] h-[27.5rem]"
            id="swiper-prev"
          >
            {/* &#8249;
             */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#9DA0A7] hover:text-[#FFB162]" // กำหนดขนาดและสีด้วย Tailwind
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/*Chevron Left (ลูกศรซ้าย) */}
              <path
                strokeLinecap="round" // ทำให้ปลายเส้นมน
                strokeLinejoin="round" // ทำให้มุมต่อมน
                strokeWidth={3} // ปรับความหนาของเส้น (คุณสามารถปรับค่าได้)
                d="M15 19l-7-7 7-7" // รูปทรงลูกศร
              />
            </svg>
          </button>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            slidesPerGroup={4}
            slidesPerGroupAuto={true}
            // centeredSlides={true}
            autoplay={{
              delay: 20000,
              disableOnInteraction: false,
            }}
            // pagination={{clickable: false,}}
            // navigation={true}
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-[100%] flex items-center justify-center"
          >
            {/* <SwiperSlide>
              <div>
                <img
                  src="/team/petch.png"
                  alt="Petch"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="member-overlay-box">
                  <p className="member-name">Thanathorn Chulay</p>
                  <p className="member-divider"></p>
                  <p className="member-title">Full stack developer / QA</p>
                </div>
              </div>
              <div>
                <img
                  src="/team/petch.png"
                  alt="Petch"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="absolute bottom-3 px-2 py-1 text-left text-white backdrop-blur-sm bg-[#1B2632B8] opacity-80 w-[65%] h-auto border-l-3 border-[#FFB162] rounded-tr-xl rounded-br-xl">
                  <p className="text-base font-bold text-[#FFB162]">
                    Thanathorn Chulay
                  </p>
                  <p className="border-1 my-1 border-[#E8E9EB14] opacity-80"></p>
                  <p className="text-sm font-medium text-[#EEE9DF]">
                    Full stack developer / QA
                  </p>
                </div>
              </div>
            </SwiperSlide> */}

            <SwiperSlide>
              <div>
                <img
                  src="/team/narawish.jpg"
                  alt="Narawish Kophimai"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="absolute bottom-3 px-2 py-1 text-left text-white backdrop-blur-sm bg-[#1B2632B8] opacity-80 w-[65%] h-auto border-l-3 border-[#FFB162] rounded-tr-xl rounded-br-xl">
                  <p className="text-base font-bold text-[#FFB162]">
                    Narawish Kophimai
                  </p>
                  <p className="border-1 my-1 border-[#E8E9EB14] opacity-80"></p>
                  <p className="text-sm font-medium text-[#EEE9DF]">
                    Product Owner
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/team/pure.png"
                  alt="Nuntakarn Paonariang"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="absolute bottom-3 px-2 py-1 text-left text-white backdrop-blur-sm bg-[#1B2632B8] opacity-80 w-[65%] h-auto border-l-3 border-[#FFB162] rounded-tr-xl rounded-br-xl">
                  <p className="text-base font-bold text-[#FFB162]">
                    Nuntakarn Paonariang
                  </p>
                  <p className="border-1 my-1 border-[#E8E9EB14] opacity-80"></p>
                  <p className="text-sm font-medium text-[#EEE9DF]">
                    Business Analyst
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/team/owen.jpg"
                  alt="Pramin Wangwun"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="absolute bottom-3 px-2 py-1 text-left text-white backdrop-blur-sm bg-[#1B2632B8] opacity-80 w-[65%] h-auto border-l-3 border-[#FFB162] rounded-tr-xl rounded-br-xl">
                  <p className="text-base font-bold text-[#FFB162]">
                    Pramin Wangwun
                  </p>
                  <p className="border-1 my-1 border-[#E8E9EB14] opacity-80"></p>
                  <p className="text-sm font-medium text-[#EEE9DF]">
                    Full stack developer
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/team/petch.png"
                  alt="Petch"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="absolute bottom-3 px-2 py-1 text-left text-white backdrop-blur-sm bg-[#1B2632B8] opacity-80 w-[65%] h-auto border-l-3 border-[#FFB162] rounded-tr-xl rounded-br-xl">
                  <p className="text-base font-bold text-[#FFB162]">
                    Thanathorn Chulay
                  </p>
                  <p className="border-1 my-1 border-[#E8E9EB14] opacity-80"></p>
                  <p className="text-sm font-medium text-[#EEE9DF]">
                    Full stack developer / QA
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/team/view.jpg"
                  alt="Irin Maysasittiroj"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="absolute bottom-3 px-2 py-1 text-left text-white backdrop-blur-sm bg-[#1B2632B8] opacity-80 w-[65%] h-auto border-l-3 border-[#FFB162] rounded-tr-xl rounded-br-xl">
                  <p className="text-base font-bold text-[#FFB162]">
                    Irin Maysasittiroj
                  </p>
                  <p className="border-1 my-1 border-[#E8E9EB14] opacity-80"></p>
                  <p className="text-sm font-medium text-[#EEE9DF]">
                    Full stack developer
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/team/donut.jpg"
                  alt="Parichat Hongsa"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="absolute bottom-3 px-2 py-1 text-left text-white backdrop-blur-sm bg-[#1B2632B8] opacity-80 w-[65%] h-auto border-l-3 border-[#FFB162] rounded-tr-xl rounded-br-xl">
                  <p className="text-base font-bold text-[#FFB162]">
                    Parichat Hongsa
                  </p>
                  <p className="border-1 my-1 border-[#E8E9EB14] opacity-80"></p>
                  <p className="text-sm font-medium text-[#EEE9DF]">
                    Frontend developer
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/team/florence.png"
                  alt="Florence Ferrara"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="absolute bottom-3 px-2 py-1 text-left text-white backdrop-blur-sm bg-[#1B2632B8] opacity-80 w-[65%] h-auto border-l-3 border-[#FFB162] rounded-tr-xl rounded-br-xl">
                  <p className="text-base font-bold text-[#FFB162]">
                    Florence Ferrara
                  </p>
                  <p className="border-1 my-1 border-[#E8E9EB14] opacity-80"></p>
                  <p className="text-sm font-medium text-[#EEE9DF]">
                    Backend developer
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/team/ball.jpg"
                  alt="Petch"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="absolute bottom-3 px-2 py-1 text-left text-white backdrop-blur-sm bg-[#1B2632B8] opacity-80 w-[65%] h-auto border-l-3 border-[#FFB162] rounded-tr-xl rounded-br-xl">
                  <p className="text-base font-bold text-[#FFB162]">
                    Thanaporn Worasan
                  </p>
                  <p className="border-1 my-1 border-[#E8E9EB14] opacity-80"></p>
                  <p className="text-sm font-medium text-[#EEE9DF]">
                    Backend developer
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/team/nop.jpg"
                  alt="Noppon Changchai"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="absolute bottom-3 px-2 py-1 text-left text-white backdrop-blur-sm bg-[#1B2632B8] opacity-80 w-[65%] h-auto border-l-3 border-[#FFB162] rounded-tr-xl rounded-br-xl">
                  <p className="text-base font-bold text-[#FFB162]">
                    Noppon Changchai
                  </p>
                  <p className="border-1 my-1 border-[#E8E9EB14] opacity-80"></p>
                  <p className="text-sm font-medium text-[#EEE9DF]">
                    UX/UI Designer
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  src="/team/shi-ryu.jpg"
                  alt="Wichayoot Wongsason"
                  className="rounded-lg w-[18.25rem] h-[27.5rem] object-cover"
                />
                <div className="absolute bottom-3 px-2 py-1 text-left text-white backdrop-blur-sm bg-[#1B2632B8] opacity-80 w-[65%] h-auto border-l-3 border-[#FFB162] rounded-tr-xl rounded-br-xl">
                  <p className="text-base font-bold text-[#FFB162]">
                    Wichayoot Wongsason
                  </p>
                  <p className="border-1 my-1 border-[#E8E9EB14] opacity-80"></p>
                  <p className="text-sm font-medium text-[#EEE9DF]">
                    Graphic Designer
                  </p>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
          {/* ปุ่มขวา */}
          <button
            className="swiper-next hover:bg-[rgba(232,233,235,0.08)] hover:cursor-pointer p-2 text-4xl rounded-lg w-[2.5rem] h-[27.5rem]"
            id="swiper-next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#9DA0A7] hover:text-[#FFB162]" // กำหนดขนาดและสีด้วย Tailwind
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/*Chevron Right (ลูกศรขวา) */}
              <path
                strokeLinecap="round" // ทำให้ปลายเส้นมน
                strokeLinejoin="round" // ทำให้มุมต่อมน
                strokeWidth={3} // ปรับความหนาของเส้น (คุณสามารถปรับค่าได้)
                d="M9 5l7 7-7 7" // รูปทรงลูกศร
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
