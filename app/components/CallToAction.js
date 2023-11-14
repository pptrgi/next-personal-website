import React from "react";

const CallToAction = () => {
  return (
    <div className="custom_container section">
      <div className="flex_center w-full -mb-[3.75rem]">
        <div className="flex flex_col items-center justify-between gap-[1.5rem] w-full  bg-titleColorDark px-[0.5rem] py-[2rem] rounded-md md480:py-[3rem] md480:flex-row md480:px-[1rem]">
          <h2 className="text-[1.75rem] text-containerColor/90 font-semibolded spaced md480:text-h1Font">
            Start Project
          </h2>
          <p className="text-bodyColor/60 spaced text-normalFont leading-6 text-center max-w-sm md480:leading-7 md480:text-h3Font md480:text-start md480:max-w-[300px] lg1023:max-w-sm">
            Would you like to start a project? Maybe you're not even sure...
            just go ahead and holla
          </p>
          <span className="px-[1.5rem] py-[0.75rem] rounded-full spaced text-titleColor bg-containerColor/95 font-semibolded text-normalFont md480:text-h3Font">
            Get Started
          </span>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
