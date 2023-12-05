import ProjectCard from "./ProjectCard";
import { projectsData } from "./ProjectsData";
import FadeIn from "../FadeIn";

const Projects = () => {
  return (
    <FadeIn>
      <section
        className="custom_container mt-[4rem] section_with_bg relative"
        id="projects"
      >
        <div className="absolute top-0 left-0 right-0 bg-titleColor h-[22rem] z-10 md480:h-[19rem]"></div>
        <div className="flex_col gap-[3rem] items-center">
          <div className="flex_col gap-[0.75rem] items-center w-full max-w-md">
            <h3 className="text-containerColor text-h3Font font-semibolded spaced z-20">
              My Recent Work
            </h3>
            <p className="spaced text-bodyColor/80 leading-5 text-center text-smallerFont z-20 md480:text-smallFont">
              Here are some of the projects I have worked on. They are sorted
              from the most recent to the earliest. I'm keeping this section
              updated with a selection of projects I'm currently tackling. It
              will offer a glimpse into my current daily work.
            </p>
          </div>

          <div className="flex_center w-full">
            <div className="grid grid-cols-1 gap-[1rem] px-[1.25rem] w-full z-20 md480:grid-cols-12 sm:px-[0.75rem] md480:px-[0.25rem] lg1023:px-[0.75rem] md480:gap-[0.5rem] lg1023:gap-[1.25rem]">
              {projectsData?.map((project) => {
                return (
                  <ProjectCard
                    key={project.nameSlug}
                    styles={project.gradientStyle}
                    name={project.name}
                    summary={project.summary}
                    nameSlug={project.nameSlug}
                    websiteLink={project.websiteLink}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Projects;
