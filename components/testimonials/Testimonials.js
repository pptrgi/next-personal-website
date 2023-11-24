import { RiDoubleQuotesL } from "react-icons/ri";
import { FaQuoteLeft } from "react-icons/fa";

import { testimonialsData } from "./TestimonialData";
import FadeIn from "../FadeIn";

const Testimonials = () => {
  return (
    <FadeIn>
      <section className="custom_container section border_section_top">
        <div className="flex_center w-full">
          <div className="flex_col gap-[3rem] w-full items-center">
            <div className="flex_col gap-[0.75rem] items-center w-full max-w-md">
              <h2 className="title_h3 spaced text-center">
                What People Say About Me
              </h2>
              <p className="spaced leading-5 text-center text-smallerFont md480:text-smallFont">
                I place huge value on strong relationships. People's feedback is
                vital in helping me to get it right
              </p>
            </div>
            <div className="flex_center w-full">
              <div className="grid grid-cols-1 gap-[1rem] md480:grid-cols-2 lg1023:gap-[1.25rem]">
                {testimonialsData?.map((testimonial) => {
                  return (
                    <div
                      key={testimonial.name}
                      className="max-w-[310px] px-[1.5rem] py-[2.5rem] rounded-lg bg-containerColor md480:max-w-[320px]"
                    >
                      <div className="flex_col gap-[3rem]">
                        <span className="text-[3rem]">
                          <FaQuoteLeft />
                        </span>
                        <p className="italic md480:h-[150px] md800:h-[140px]">
                          {testimonial.quote}
                        </p>
                        <div className="flex gap-x-[1rem] items-center">
                          <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="bg-inherit ring-4 ring-bodyColor"
                            />
                          </div>
                          <div className="flex_col gap-[0.25rem]">
                            <h4 className="title_normal_bold leading-none font-monaText">
                              {testimonial.name}
                            </h4>
                            <p className="text-smallerFont md480:text-smallFont">
                              {`${testimonial.positon} - ${testimonial.company}`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Testimonials;
