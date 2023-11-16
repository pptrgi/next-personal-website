import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[3.75rem] bg-bodyColor bottom_shadow md800:h-[4rem]">
      <div className="custom_container h-full">
        <div className="flex_center h-full w-full">
          <nav className="flex_between w-full">
            <h3 className="title_normal_bold spaced">pGitonga</h3>
            <div className="hidden items-center gap-x-[1.75rem] md480:flex md800:gap-x-[2rem] lg1023:gap-x-[2.5rem] ">
              <Link href={"/"} className="tracking-wider">
                Home
              </Link>
              <Link href={"/#about"} className="tracking-wider">
                About
              </Link>
              <Link href={"/#contact"} className="tracking-wider">
                Contact
              </Link>
              <Link href={"/#projects"} className="tracking-wider">
                Projects
              </Link>
            </div>
            <div className="inline-flex md480:hidden">
              <span className="text-h3">
                <RiMenu3Fill />
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
