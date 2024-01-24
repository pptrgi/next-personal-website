import {
  IoHeart,
  IoLogoWhatsapp,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { RiTwitterXFill, RiWhatsappFill, RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-containerColor border-t-[1px] border-gray-200">
      <div className="custom_container">
        <div className="pt-[4.25rem] pb-[3rem]">
          <div className="flex_center w-full">
            <div className="flex_col gap-[1rem] items-center">
              <div className="flex items-center gap-[0.3rem] spaced">
                <p>Made with</p>
                <span className="text-red-600 text-h3Font">
                  <IoHeart />
                </span>
                <p className="spaced">
                  by{" "}
                  <span className="text-titleColorDark font-semibolded">
                    p.Gitonga
                  </span>{" "}
                  &#169; {new Date().getFullYear()}
                </p>
              </div>
              <div className="flex gap-[0.4rem] items-center">
                <div className="flex gap-[0.6rem] items-center pr-[0.75rem] border-r-[1.5px] border-textColor/30 md480:gap-[0.7rem] ">
                  <a
                    href="https://www.linkedin.com/in/petergitonga"
                    className="p-[4px] rounded-full bg-transparent ring-2 ring-textColor text-textColor hover:ring-titleColorDark hover:text-titleColorDark transition duration-300"
                  >
                    <RiLinkedinFill />
                  </a>
                  <a
                    href="https://x.com/ptrgitonga"
                    className="p-[4px] rounded-full bg-transparent ring-2 ring-textColor text-textColor hover:ring-titleColorDark hover:text-titleColorDark transition duration-300"
                  >
                    <RiTwitterXFill />
                  </a>
                  <a
                    href="https://wa.me/254700119134"
                    className="p-[4px] rounded-full bg-transparent ring-2 ring-textColor text-textColor hover:ring-titleColorDark hover:text-titleColorDark transition duration-300"
                  >
                    <RiWhatsappFill />
                  </a>
                </div>
                <a href="https://buymeacoffee.com/ptrgitonga">
                  <img
                    src="/images/buymeacoffee_logo.png"
                    className="h-[21px]"
                    alt="Buy Peter a Coffee"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
