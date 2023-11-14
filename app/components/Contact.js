import { IoChatboxSharp, IoReaderSharp, IoPeopleSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="custom_container section">
      <div className="flex_center w-full">
        <div className="flex_col items-center gap-[2rem]">
          <h2 className="text-titleColor text-h3Font font-semibolded spaced">
            Get in Touch?
          </h2>
          <div className="grid grid-cols-1 gap-[2rem] md480:grid-cols-6 md480:gap-[1rem]">
            <div className="col-span-1 md480:col-span-2">
              <div className="flex gap-[0.5rem] items-start">
                <span className="p-[4px] text-h3 rounded-full bg-titleColor text-bodyColor">
                  <IoPeopleSharp />
                </span>
                <div className="flex_col gap-[1.5rem]">
                  <div className="flex_col gap-[0.75rem]">
                    <h3 className="text-titleColor font-semibolded">
                      Collaborate / Partnership
                    </h3>
                    <p>I'm open to Collaborate and Partnership opportunities</p>
                  </div>
                  <span className="px-[1.5rem] py-[0.75rem] rounded-full text-titleColor border-2 border-titleColor w-fit">
                    Lets do this
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
                  <div className="flex_col gap-[0.75rem]">
                    <h3 className="text-titleColor font-semibolded">Resume</h3>
                    <p>
                      Want my resume? I get it, you're here to get my resume
                    </p>
                  </div>
                  <span className="px-[1.5rem] py-[0.75rem] rounded-full text-titleColor border-2 border-titleColor w-fit">
                    Right here
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1 md480:col-span-2">
              <div className="flex gap-[0.5rem] items-start">
                <span className="p-[4px] text-h3 rounded-full bg-titleColor text-bodyColor">
                  <IoChatboxSharp />
                </span>
                <div className="flex_col gap-[1.5rem]">
                  <div className="flex_col gap-[0.75rem]">
                    <h3 className="text-titleColor font-semibolded">
                      Say Hello
                    </h3>
                    <p>
                      Feel free to reach out and say hello. Make a new friend
                    </p>
                  </div>
                  <span className="px-[1.5rem] py-[0.75rem] rounded-full text-titleColor border-2 border-titleColor w-fit">
                    Start a conversation
                  </span>
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
