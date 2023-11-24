import React from "react";
import { aboutSkillsData } from "./AboutSkillsData";
import AboutSkillCard from "./AboutSkillCard";
import FadeIn from "../FadeIn";

const About = () => {
  return (
    <FadeIn>
      <section
        className="custom_container mt-[1rem] relative section_with_bg"
        id="about"
      >
        <div className="absolute top-0 left-0 right-0 bg-titleColor h-[22rem] z-10"></div>
        <div className="flex_center w-full">
          <div className="flex_col items-center gap-[3rem]">
            <div className="flex_col gap-[0.75rem] items-center w-full max-w-md">
              <h3 className="text-containerColor text-h3Font font-semibolded spaced z-20 text-center">
                Hi I'm Peter, Nice to Meet You
              </h3>
              <p className="spaced text-bodyColor/80 leading-5 text-center text-smallerFont z-20 md480:text-smallFont">
                Peter has a BSc. IT and is passionate about bringing both the
                technical and visual aspects of digital products to life. I
                sweat the details. And as a follower of John Maeda's Laws of
                Simplicity, I agree that less is more. I'm happiest when I'm
                creating, learning, exploring and thinking about how to make
                things better.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-[1rem] px-[1.25rem] z-20 md480:grid-cols-12 sm:px-[0.75rem] md480:px-[0.25rem] lg1023:px-[0.75rem] md480:gap-[0.5rem] lg1023:gap-[1.25rem]">
              {aboutSkillsData.map((skill, index) => {
                return (
                  <AboutSkillCard
                    key={index}
                    name={skill.name}
                    description={skill.description}
                    specifics={skill.specifics}
                    tools={skill.tools}
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

export default About;
