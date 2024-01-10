"use client";

import { IoChatboxSharp, IoReaderSharp, IoPeopleSharp } from "react-icons/io5";

import FadeIn from "./FadeIn";
import IconComplement from "./IconComplement";

const Contact = () => {
  return (
    <FadeIn>
      <section
        className="custom_container section border_section_top"
        id="contact"
      >
        <div className="flex_center w-full">
          <div className="flex_col items-center gap-[2rem]">
            <h2 className="text-titleColor text-h3Font font-semibolded spaced">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 gap-[3rem] md480:grid-cols-6 md480:gap-[1rem]">
              <div className="col-span-1 md480:col-span-2">
                <div className="flex gap-[0.5rem] items-start">
                  <IconComplement icon={<IoPeopleSharp />} />
                  <div className="flex_col gap-[1.5rem]">
                    <div className="flex_col gap-[0.5rem]">
                      <h3 className="text-titleColor font-semibolded">
                        Collaborate{" "}
                        <span className="md480:hidden lg1023:inline">
                          / Partnership
                        </span>
                      </h3>
                      <p>
                        I'm open to collaborate and for partnership
                        opportunities
                      </p>
                    </div>
                    <a
                      href="mailto:pptrgitonga@gmail.com"
                      className="outline_button w-fit truncate"
                    >
                      Let's do this
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-span-1 md480:col-span-2">
                <div className="flex gap-[0.5rem] items-start">
                  <IconComplement icon={<IoReaderSharp />} />
                  <div className="flex_col gap-[1.5rem]">
                    <div className="flex_col gap-[0.5rem]">
                      <h3 className="text-titleColor font-semibolded">
                        Resume
                      </h3>
                      <p>
                        Want my resume? I get it, you're here to get my resume
                      </p>
                    </div>
                    <a
                      href="/resume/Peter_Gitonga_Resume.pdf"
                      download={true}
                      className="outline_button w-fit"
                    >
                      Right here
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-span-1 md480:col-span-2">
                <div className="flex gap-[0.5rem] items-start">
                  <IconComplement icon={<IoChatboxSharp />} />
                  <div className="flex_col gap-[1.5rem]">
                    <div className="flex_col gap-[0.5rem]">
                      <h3 className="text-titleColor font-semibolded">
                        Say Hi
                      </h3>
                      <p>
                        Feel free to reach out and say hello. Make a new friend
                      </p>
                    </div>
                    <a
                      href="https://wa.me/254700119134"
                      className="outline_button w-fit"
                    >
                      Say hello
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Contact;
