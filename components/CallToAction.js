import FadeIn from "./FadeIn";

const CallToAction = () => {
  return (
    <FadeIn>
      <div className="custom_container section">
        <div className="flex_center w-full -mb-[3.75rem]">
          <div className="grid grid-cols-1 items-center gap-[1.5rem] w-full ring-4 ring-titleColor bg-titleColorDark px-[0.5rem] py-[2rem] rounded-md md480:py-[3rem] lg1023:py-[4rem] md480:grid-cols-12 md480:px-[0.5rem] lg1023:px-[1rem]">
            <h2 className="col-span-1 text-[1.75rem] text-center text-containerColor/90 font-semibolded tracking-tight md480:text-h1Font md480:col-span-5 md800:col-span-4 md480:text-start">
              Start Project
            </h2>
            <div className="col-span-1 md480:col-span-7 md800:col-span-8">
              <div className="grid grid-cols-1 min gap-[1.5rem] items-center md480:gap-[2rem] lg1023:grid-cols-6">
                <div className="col-span-1 lg1023:col-span-4">
                  <p className="text-bodyColor/60 spaced text-normalFont leading-6 text-center max-w-sm md480:leading-7 md480:text-h3Font md480:text-start">
                    Let's discuss your pending or unstarted project, or the
                    other one that you're not sure about
                  </p>
                </div>
                <div className="col-span-1 lg1023:col-span-2">
                  <div className="flex justify-center items-center md480:justify-start md480:items-start">
                    <a
                      href="mailto:pptrgitonga@gmail.com"
                      className="px-[1.5rem] py-[0.75rem] rounded-full tracking-wider text-titleColor bg-containerColor/95 font-semibolded ring-2 ring-bodyColor text-normalFont md480:text-h3Font"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default CallToAction;
