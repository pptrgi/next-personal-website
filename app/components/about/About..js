import React from "react";
import { aboutSkillsData } from "./AboutSkillsData";
import AboutSkillCard from "./AboutSkillCard";

const About = () => {
  return (
    <section
      className="custom_container mt-[1rem] relative section_with_bg"
      id="about"
    >
      <div className="absolute top-0 left-0 right-0 bg-titleColor h-[22rem] z-10"></div>
      <div className="flex_center w-full">
        <div className="flex_col items-center gap-[3rem]">
          <div className="flex_col gap-[0.75rem] items-center w-full max-w-md">
            <h3 className="text-containerColor text-h3Font font-semibolded spaced z-20">
              Hi I'm Peter, Nice to Meet You
            </h3>
            <p className="spaced text-bodyColor/80 leading-5 text-center text-smallerFont z-20 md480:text-smallFont">
              Peter has a BSc. IT and is passionate about bringing both the
              technical and visual aspects of digital products to life. I sweat
              the details while also following John Maeda's Laws of Simplicity,
              I agree that less is more. I'm happiest when I'm creating,
              learning, exploring and thinking about how to make things better.
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

            {/* <div className="flex_col gap-[2rem] items-center bg-containerColor rounded-md py-[2rem] px-[0.75rem] col-span-1 min-h-[450px] md480:col-span-4 md480:px-[0.25rem] lg1023:px-[1.25rem] md480:min-h-auto">
              <h4 className="title_normal_bold spaced">
                {aboutSkillsData[0].name}
              </h4>
              <p className="spaced text-center">
                {aboutSkillsData[0].description}
              </p>
              <div className="flex_col gap-[0.5rem] items-center">
                <h4 className="font-semibolded spaced">What on frontend</h4>
                <div className="flex_center w-full">
                  <p className="text-center">{aboutSkillsData[0].specifics}</p>
                </div>
              </div>
              <div className="flex_col items-center gap-[0.5rem]">
                <h4 className="font-semibolded spaced">Tools used</h4>
                <div className="flex_col items-center gap-[0.25rem]">
                  <span>React Native</span>
                  <span>Tailwind</span>
                  <span>Next.js</span>
                  <span>React</span>
                </div>
              </div>
            </div> */}
            {/*
            <div className="flex_col gap-[2rem] items-center bg-containerColor rounded-md py-[2rem] px-[0.5rem] col-span-1 md480:col-span-4 md480:px-[0.75rem]">
              <h4 className="title_normal_bold spaced">Backend</h4>
              <p className="spaced text-center">
                Implement the application's business logic and functionality
              </p>
              <div className="flex_col gap-[0.5rem] items-center">
                <h4 className="font-semibolded spaced">What on backend</h4>
                <p>REST, GraphQL, Database</p>
              </div>
              <div className="flex_col items-center gap-[0.5rem]">
                <h4 className="font-semibolded spaced">Tools used</h4>
                <div className="flex_col items-center gap-[0.25rem]">
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                  <span>Express.js</span>
                  <span>Next.js</span>
                  <span>Node.js</span>
                </div>
              </div>
            </div>
            <div className="flex_col gap-[2rem] items-center bg-containerColor rounded-md py-[2rem] px-[0.5rem] col-span-1 md480:col-span-4 md480:px-[0.75rem]">
              <h4 className="title_normal_bold spaced">Fullstack</h4>
              <p className="spaced text-center">
                Bring the frontend and backend experiences together make an
                all-around app
              </p>
              <div className="flex_col gap-[0.5rem] items-center">
                <h4 className="font-semibolded spaced">What on fullstack</h4>
                <div className="flex_center w-full">
                  <p className="text-center">Websites and Mobile Apps</p>
                </div>
              </div>
              <div className="flex_col items-center gap-[0.5rem]">
                <h4 className="font-semibolded spaced">Tools used</h4>
                <div className="flex_col items-center gap-[0.25rem]">
                  <span>Non/Relational DB</span>
                  <span>JavaScript</span>
                  <span>CI/CD</span>
                  <span>API's</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
