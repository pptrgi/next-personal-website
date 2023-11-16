"use client";

import { useRef } from "react";
import { IoChatboxSharp, IoReaderSharp, IoPeopleSharp } from "react-icons/io5";
import ReadMoreOrLessText from "./ReadMoreOrLessText";

const Contact = () => {
  const collaborateRef = useRef();
  const resumeRef = useRef();
  const helloRef = useRef();
  return (
    <section
      className="custom_container section border_section_top"
      id="contact"
    >
      <div className="flex_center w-full">
        <div className="flex_col items-center gap-[2rem]">
          <h2 className="text-titleColor text-h3Font font-semibolded spaced">
            Get in Touch?
          </h2>
          <div className="grid grid-cols-1 gap-[3rem] md480:grid-cols-6 md480:gap-[1rem]">
            <div className="col-span-1 md480:col-span-2">
              <div className="flex gap-[0.5rem] items-start">
                <span className="p-[4px] text-h3 rounded-full bg-titleColor text-bodyColor">
                  <IoPeopleSharp />
                </span>
                <div className="flex_col gap-[1.5rem]">
                  <div className="flex_col gap-[0.5rem]">
                    <h3 className="text-titleColor font-semibolded">
                      Collaborate{" "}
                      <span className="md480:hidden md800:inline">
                        / Partnership
                      </span>
                    </h3>
                    <ReadMoreOrLessText
                      nodeRef={collaborateRef}
                      text={
                        "I'm open to collaborate and for partnership opportunities"
                      }
                      linesClampStyle={"line-clamp-2"}
                    />
                    {/* <p>
                      I'm open to collaborate and for partnership opportunities
                    </p> */}
                  </div>
                  <span className="outline_button w-fit truncate">
                    Let's do this
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1 md480:col-span-2">
              <div className="flex gap-[0.5rem] items-start">
                <span className="p-[4px] text-h3 rounded-full bg-titleColor text-bodyColor">
                  <IoReaderSharp />
                </span>
                <div className="flex_col gap-[1.5rem]">
                  <div className="flex_col gap-[0.5rem]">
                    <h3 className="text-titleColor font-semibolded">Resume</h3>
                    <ReadMoreOrLessText
                      nodeRef={resumeRef}
                      text={
                        "Want my resume? I get it, you're here to get my resume"
                      }
                      linesClampStyle={"line-clamp-2"}
                    />
                    {/* <p>
                      Want my resume? I get it, you're here to get my resume
                    </p> */}
                  </div>
                  <span className="outline_button w-fit">Right here</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 md480:col-span-2">
              <div className="flex gap-[0.5rem] items-start">
                <span className="p-[4px] text-h3 rounded-full bg-titleColor text-bodyColor">
                  <IoChatboxSharp />
                </span>
                <div className="flex_col gap-[1.5rem]">
                  <div className="flex_col gap-[0.5rem]">
                    <h3 className="text-titleColor font-semibolded">
                      Say hello
                    </h3>
                    <ReadMoreOrLessText
                      nodeRef={helloRef}
                      text={
                        "Feel free to reach out and say hello. Make a new friend"
                      }
                      linesClampStyle={"line-clamp-2"}
                    />
                    {/* <p>
                      Feel free to reach out and say hello. Make a new friend
                    </p> */}
                  </div>
                  <span className="outline_button w-fit">Say hi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
