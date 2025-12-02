import { projects } from "./projects";
import ProjectCard from "./ProjectCard";
import CarouselControls from "./CarouselControls";

export default function ProjectShowcase() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-8">
      {/* Left - Big Project (Whalarora) */}
      <ProjectCard
        title={projects[0].title}
        text={projects[0].text}
        image={projects[0].image}
        phoneImage={projects[0].phoneImage}
      />

      {/* Right section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-white">{projects[0].title}</h2>
        <p className="text-gray-300 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        {/* Controls */}
        <CarouselControls />

        {/* 2 small project cards below */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <ProjectCard
            title={projects[1].title}
            text={projects[1].text}
            image={projects[1].image}
          />

          <ProjectCard
            title={projects[2].title}
            text={projects[2].text}
            image={projects[2].image}
          />
        </div>
      </div>
    </div>
  );
}
