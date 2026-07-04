import { projects } from './projects';
import ProjectCard from './ProjectCard';
import CarouselControls from './CarouselControls';

export default function ProjectShowcase() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-8">
      {/* Left - Whalarora */}
      <ProjectCard
        title={projects[0].title}
        text={projects[0].text}
        image={projects[0].image}
        phoneImage={projects[0].phoneImage}
      />

      {/* Right section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-semibold text-white">
          {projects[0].title}
        </h2>
        <p className="text-base text-[#70747E] mt-4 leading-relaxed">
          {projects[0].text}
        </p>

        {/* Controls */}
        <div className="flex justify-center">
          <CarouselControls />
        </div>
        
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
