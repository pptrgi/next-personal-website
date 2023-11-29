import React from "react";

const AboutSkillCard = ({ name, description, specifics, tools }) => {
  return (
    <div className="flex_col gap-[2rem] items-center bg-containerColor rounded-md py-[2.5rem] px-[0.75rem] col-span-1 min-h-[400px] z-20 md480:col-span-4 md480:px-[0.25rem] md480:py-[2rem] lg1023:py-[2.5rem] lg1023:px-[1.25rem] md480:min-h-auto">
      <h4 className="title_normal_bold spaced capitalize">{name}</h4>
      <p className="spaced text-center md480:min-h-[100px] md800:min-h-[70px]">
        {description}
      </p>
      <div className="flex_col gap-[0.5rem] items-center">
        <h4 className="font-semibolded spaced text-titleColor/90">
          What on {name}
        </h4>
        <div className="flex_center w-full">
          <p className="text-center">{specifics}</p>
        </div>
      </div>
      <div className="flex_col items-center gap-[0.5rem]">
        <h4 className="font-semibolded spaced text-titleColor/90">
          Tools used
        </h4>
        <div className="flex_col items-center gap-[0.25rem]">
          {tools?.map((tool, index) => {
            return <span key={index}>{tool}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutSkillCard;
