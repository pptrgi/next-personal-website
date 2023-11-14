import { IoHeart } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-containerColor border-t-[1px] border-gray-200">
      <div className="custom_container">
        <div className="pt-[4.25rem] pb-[3rem]">
          <div className="flex_center w-full">
            <div className="flex items-center gap-[0.3rem] spaced">
              <p>Made with</p>
              <span className="text-red-600 text-h3Font">
                <IoHeart />
              </span>
              <p className="spaced">
                by{" "}
                <span className="text-titleColorDark font-semibolded">
                  pGitonga
                </span>{" "}
                &#169; 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
