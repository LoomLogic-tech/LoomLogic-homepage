import ServiceCard from "./ServiceCard";
import { services } from "./service-data";

export default function ServicesSection() {
  return (
    <section id="service" className="bg-[#1B2632] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px] rounded-[20px] border border-[#FFB162]/70 bg-[linear-gradient(160deg,#24222A_0%,#1B2632_56%,#172938_100%)] px-5 pb-12 pt-5 shadow-[0_20px_40px_rgba(5,10,18,0.32)] sm:px-10 lg:px-[50px] lg:pb-12">
        <h2 className="text-center text-[42px] font-semibold leading-none text-white sm:text-5xl lg:text-[50px]">
          Our <span className="text-[#FFB162]">Services</span>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-[35px]">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
