import React from "react";

const About = () => {
  return (
    <section className="custom_container mt-[1rem] relative section_with_bg">
      <div className="absolute top-0 left-0 right-0 bg-titleColor h-[60vh] z-10 xs:h-[80vh] md480:h-[40vh]"></div>
      <div className="flex_center w-full">
        <div className="flex_col items-center gap-[2rem]">
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

          <div className="grid grid-cols-1 gap-[0.5rem] px-[0.75rem] md480:grid-cols-12 z-20">
            <div className="flex_col gap-[2rem] items-center bg-containerColor rounded-md py-[2rem] px-[0.5rem] col-span-1 md480:col-span-4 md480:px-[0.75rem]">
              <h4 className="title_normal_bold spaced">Frontend</h4>
              <p className="spaced text-center">
                Creating elegant and aesthetic user interfaces following core
                design principles
              </p>
              <div className="flex_col gap-[0.5rem] items-center">
                <h4 className="font-semibolded spaced">What on frontend</h4>
                <p>UI, UX, Web, App</p>
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
            </div>
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
              <h4 className="title_normal_bold spaced">Consulting</h4>
              <p className="spaced text-center">
                Are you interested in feedback or advice for your project? I can
                help
              </p>
              <div className="flex_col gap-[0.5rem] items-center">
                <h4 className="font-semibolded spaced">What on consulting</h4>
                <p>Websites and Mobile Apps</p>
              </div>
              <div className="flex_col items-center gap-[0.5rem]">
                <h4 className="font-semibolded spaced">Specificity</h4>
                <div className="flex_col items-center gap-[0.25rem]">
                  <span>JavaScript</span>
                  <span>CI/CD</span>
                  <span>SQL</span>
                  {/* <span>Mobile applications</span>
                  <span>Company sites</span>
                  <span>Personal sites</span>
                  <span>Ecommerce</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
