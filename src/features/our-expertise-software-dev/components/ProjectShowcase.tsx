import { projects } from './projects';
import ProjectCard from './ProjectCard';
import CarouselControls from './CarouselControls';

export default function ProjectShowcase() {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-4 pb-20 pt-[84px] sm:px-6 lg:grid-cols-[750px_minmax(0,1fr)] lg:gap-[94px] lg:px-[112px] lg:pb-[108px]">
      <div className="flex items-end">
        <ProjectCard
          title={featuredProject.title}
          text={featuredProject.text}
          image={featuredProject.image}
          phoneImage={featuredProject.phoneImage}
          priority
          className="max-w-[640px] lg:max-w-none"
          imageClassName="aspect-[640/400]"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-end pb-0 lg:pb-[2px]">
        <h2 className="text-[34px] font-semibold leading-tight text-white sm:text-[40px]">
          {featuredProject.title}
        </h2>
        <p className="mt-6 max-w-[505px] text-[18px] leading-[1.32] text-[#70747E]">
          {featuredProject.text}
        </p>

        <div className="max-w-[505px]">
          <CarouselControls />
        </div>

        <div className="mt-[35px] grid max-w-[620px] grid-cols-2 gap-7">
          {secondaryProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              text={project.text}
              image={project.image}
              imageClassName="aspect-[337/197]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
