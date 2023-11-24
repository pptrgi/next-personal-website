import React from "react";

const SectionIntro = () => {
  return (
    <div className="flex_col gap-[0.75rem] items-center w-full max-w-md">
      <h3 className="text-containerColor text-h3Font font-semibolded spaced z-20">
        Hi I'm Peter, Nice to Meet You
      </h3>
      <p className="spaced text-bodyColor/80 leading-5 text-center text-smallerFont z-20 md480:text-smallFont">
        Peter has a BSc. IT and is passionate about bringing both the technical
        and visual aspects of digital products to life. I sweat the details
        while also following John Maeda's Laws of Simplicity, I agree that less
        is more. I'm happiest when I'm creating, learning, exploring and
        thinking about how to make things better.
      </p>
    </div>
  );
};

export default SectionIntro;
