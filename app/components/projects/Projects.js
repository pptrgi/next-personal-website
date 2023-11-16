import {} from "react-icons/io5";

import ProjectCard from "./ProjectCard";
import { projectsData } from "./ProjectsData";

const Projects = () => {
  return (
    <section
      className="custom_container mt-[4rem] section_with_bg relative"
      id="projects"
    >
      <div className="absolute top-0 left-0 right-0 bg-titleColor h-[16rem] z-10"></div>
      <div className="flex_col gap-[3rem] items-center">
        <div className="flex_col gap-[0.75rem] items-center w-full max-w-md">
          <h3 className="text-containerColor text-h3Font font-semibolded spaced z-20">
            My Recent Work
          </h3>
          <p className="spaced text-bodyColor/80 leading-5 text-center text-smallerFont z-20 md480:text-smallFont">
            Here are some of the projects that I have worked on. Sorted from
            most recent to earliest
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
                />
              );
            })}

            {/* <ProjectCard
              styles={
                "bg-gradient-to-br from-[#FFD3EB] via-[#ff98d0] to-[#ff229a]"
              }
              name={"Qazini"}
              summary={"job search helper using RapidAPI with graphQL"}
            />

            <ProjectCard
              styles={"bg-gradient-to-bl to-[#00aeff] from-[#1e73be]"}
              name={"NyumbaHub"}
              summary={"A vacant houses finding service based in Kenya"}
            />

            <ProjectCard
              styles={"bg-gradient-to-r from-[#5267DF] to-[#9fadfd]"}
              name={"Seedlings by Mwalim"}
              summary={"Seedlings Ecommerce website"}
            />
            <ProjectCard
              styles={"bg-gradient-to-r from-titleColor to-titleColorDark"}
              name={"Personal Website"}
              summary={"Personal and Portfolio Website"} 
            /> */}
            {/* <div className="relative group col-span-1 z-20 overflow-hidden">
              <div className="w-full bg-gradient-to-bl to-[#00aeff] from-[#1e73be] rounded-lg px-[0.75rem] py-[1rem] z-20">
                <div className="flex_center w-full min-h-[180px]">
                  <h3 className="z-20 text-h3Font font-semibolded text-titleColor/70">
                    NyumbaHub
                  </h3>
                </div>
              </div>

              <div className="absolute left-0 right-0 -bottom-[100vh] px-[0.75rem] py-[1.25rem] bg-containerColor rounded-lg group-hover:top-0 group-hover:bottom-0 group-hover:z-30">
                <div className="flex_center w-full h-full">
                  <div className="flex_col gap-[2rem]">
                    <p className="text-center">
                      A vacant houses finding service based in Kenya
                    </p>
                    <div className="flex flex-row items-center gap-[0.75rem] w-full md480:flex-col lg1023:flex-row md480:gap-[0.25rem] lg1023:gap-[0.75rem]">
                      <span className="px-[1.5rem] py-[0.75rem] rounded-full bg-titleColor text-containerColor">
                        Visit Website
                      </span>
                      <span className="px-[1.5rem] py-[0.75rem] rounded-full text-titleColor border-2 border-titleColor">
                        See More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="relative group col-span-1 z-20 overflow-hidden">
              <div className="w-full bg-gradient-to-br from-[#FFD3EB] via-[#ff98d0] to-[#ff229a] rounded-lg px-[0.75rem] py-[1rem] z-20">
                <div className="flex_center w-full min-h-[180px]">
                  <h3 className="z-20 text-h3Font font-semibolded text-titleColor/70">
                    Qazini
                  </h3>
                </div>
              </div>

              <div className="absolute left-0 right-0 -bottom-[100vh] px-[0.75rem] py-[1.25rem] bg-containerColor rounded-lg group-hover:top-0 group-hover:bottom-0 group-hover:z-30">
                <div className="flex_center w-full h-full">
                  <div className="flex_col gap-[2rem]">
                    <p className="text-center">
                      Job search helper using RapidAPI with graphQL
                    </p>
                    <div className="flex flex-row items-center gap-[0.75rem] w-full md480:flex-col lg1023:flex-row md480:gap-[0.25rem] lg1023:gap-[0.75rem]">
                      <span className="px-[1.5rem] py-[0.75rem] rounded-full bg-titleColor text-containerColor">
                        Visit Website
                      </span>
                      <span className="px-[1.5rem] py-[0.75rem] rounded-full text-titleColor border-2 border-titleColor">
                        See More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="relative group col-span-1 z-20 overflow-hidden">
              <div className="w-full bg-gradient-to-r from-[#5267DF] to-[#9fadfd] rounded-lg px-[0.75rem] py-[1rem] z-20">
                <div className="flex_center w-full min-h-[180px]">
                  <h3 className="z-20 text-h3Font font-semibolded text-titleColor/70">
                    Seedlings by Mwalim
                  </h3>
                </div>
              </div>

              <div className="absolute left-0 right-0 -bottom-[100vh] px-[0.75rem] py-[1.25rem] bg-containerColor rounded-lg group-hover:top-0 group-hover:bottom-0 group-hover:z-30">
                <div className="flex_center w-full h-full">
                  <div className="flex_col gap-[2rem]">
                    <p className="text-center">Seedlings Ecommerce website</p>
                    <div className="flex flex-row items-center gap-[0.75rem] w-full md480:flex-col lg1023:flex-row md480:gap-[0.25rem] lg1023:gap-[0.75rem]">
                      <span className="px-[1.5rem] py-[0.75rem] rounded-full bg-titleColor text-containerColor">
                        Visit Website
                      </span>
                      <span className="px-[1.5rem] py-[0.75rem] rounded-full text-titleColor border-2 border-titleColor">
                        See More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="relative group col-span-1 z-20 overflow-hidden">
              <div className="w-full bg-gradient-to-r from-titleColor to-titleColorDark rounded-lg px-[0.75rem] py-[1rem] z-20">
                <div className="flex_center w-full min-h-[180px]">
                  <h3 className="z-20 text-h3Font font-semibolded text-bodyColor/25">
                    Personal Website
                  </h3>
                </div>
              </div>

              <div className="absolute left-0 right-0 -bottom-[100vh] px-[0.75rem] py-[1.25rem] bg-containerColor rounded-lg group-hover:top-0 group-hover:bottom-0 group-hover:z-30">
                <div className="flex_center w-full h-full">
                  <div className="flex_col gap-[2rem]">
                    <p className="text-center">
                      Personal and Portfolio Website
                    </p>
                    <div className="flex flex-row items-center gap-[0.75rem] w-full md480:flex-col lg1023:flex-row md480:gap-[0.25rem] lg1023:gap-[0.75rem]">
                      <span className="px-[1.5rem] py-[0.75rem] rounded-full bg-titleColor text-containerColor">
                        Visit Website
                      </span>
                      <span className="px-[1.5rem] py-[0.75rem] rounded-full text-titleColor border-2 border-titleColor">
                        See More
                      </span>
                    </div>
                  </div>
                </div>
              </div> 
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
