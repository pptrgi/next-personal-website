import React from "react";

const Hero = () => {
  return (
    <section className="custom_container">
      <div className="hero_section flex_center w-full">
        <div className="flex_col gap-[9rem] items-center h-full">
          <div className="flex_col items-center gap-[3rem]">
            <div className="flex_col items-center gap-[0.75rem]">
              <h3 className="title_h2_bold spaced capitalize leading-none">
                fullstack developer
              </h3>
              <p className="spaced text-center max-w-md">
                A life-long learner who enjoys creating simple beautiful
                functional things that live on the internet
              </p>
            </div>
            <div className="relative h-[100px] w-[100px] bg-containerColor rounded-full overflow-hidden">
              <img
                src="/male_avatar.svg"
                className="absolute object-cover"
                alt="illustration"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="flex_center w-full">
              <div className="flex items-center gap-[0.125rem] md480:gap-[0.25rem]">
                <img
                  src="/programming_desk.svg"
                  className="max-w-[130px] md480:max-w-[200px]"
                  alt="illustration"
                />
                <img
                  src="/computer_screens.svg"
                  className="max-w-[130px] md480:max-w-[200px]"
                  alt="illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
