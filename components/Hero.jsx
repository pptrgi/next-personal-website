import React from "react";
import FadeIn from "./FadeIn";

const Hero = () => {
  return (
    <FadeIn>
      <section className="custom_container">
        <div className="hero_section flex_center w-full">
          <div className="flex_col gap-y-[9rem] items-center h-full sm:gap-y-[8rem]">
            <div className="flex_col items-center gap-[3rem]">
              <div className="flex_col items-center gap-[0.75rem]">
                <h3 className="title_h2_bold spaced capitalize leading-none text-center">
                  fullstack developer
                </h3>
                <p className="spaced text-center max-w-md">
                  A life-long learner who enjoys creating elegant, beautiful and
                  functional things that live on the internet.
                </p>
              </div>
              <div className="relative h-[100px] w-[100px] bg-containerColor rounded-full overflow-hidden">
                <img
                  src="/images/male_avatar.svg"
                  className="absolute object-cover"
                  alt="Male Avatar"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="flex_center w-full">
                <div className="flex_center gap-[0.125rem] md480:gap-[0.25rem]">
                  <img
                    src="/images/devices_screens.svg"
                    className="md480:max-w-[80%] md800:max-w-[70%] lg1023:max-w-[60%]"
                    alt="Devices Screens"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Hero;
