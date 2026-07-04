import ServiceCard from "./ServiceCard";
import { services } from "./service-data";

export default function ServicesSection() {
  return (
    <section className="py-10 bg-[#1B2632]">
      <div className="max-w-7xl mx-auto px-[50px] py-5 text-center rounded-[20px] bg-[linear-gradient(16.88deg,rgba(27,38,50,0.12)_22.82%,rgba(163,81,57,0.12)_102.53%)]">

        {/* Section Title */}
        <h2 className="text-5xl font-semibold text-white">
          Our <span className="text-[#FFB162]">Services</span>
        </h2>

        {/* Card Grid */}
        <div className="grid md:grid-cols-3 gap-[35px] mt-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}
