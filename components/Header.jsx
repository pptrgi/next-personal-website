"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import HamMenu from "./HamMenu";

const Header = () => {
  const [showHamMenu, setShowHamMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[3.75rem] bg-bodyColor bottom_shadow md800:h-[4rem]">
      <div className="custom_container h-full">
        <div className="flex_center h-full w-full">
          <nav className="flex_between w-full">
            <Link href={"/"}>
              <h3 className="title_normal_bold spaced">p.Gitonga</h3>{" "}
            </Link>
            <div className="hidden justify-between items-center w-8/12 md800:flex lg1120:w-1/2">
              <div className="flex items-center gap-x-[1.5rem] md800:flex lg1023:gap-x-[2rem]">
                <Link href={"/"} className="relative">
                  <span className="tracking-wide text-titleColor">Home</span>
                  <span className="block absolute bottom-0 left-0 w-[0.9rem] h-[0.125rem] bg-titleColor/60"></span>
                </Link>
                <Link href={"/#about"} className="relative group">
                  <span className="tracking-wide text-titleColor/40 group-hover:text-titleColor trans_300">
                    About
                  </span>
                  <span className="hidden absolute bottom-0 left-0 w-[0.9rem] h-[0.125rem] bg-titleColor/60 group-hover:block"></span>
                </Link>
                <Link href={"/#projects"} className="relative group">
                  <span className="tracking-wide text-titleColor/40 group-hover:text-titleColor trans_300">
                    Projects
                  </span>
                  <span className="hidden absolute bottom-0 left-0 w-[0.9rem] h-[0.125rem] bg-titleColor/60 group-hover:block"></span>
                </Link>
              </div>
              <div className="flex items-center gap-x-[1.5rem] lg1023:gap-x-[2rem]">
                <Link href={"/#cta"} className="relative group">
                  <span className="tracking-wide text-titleColor/40 group-hover:text-titleColor trans_300">
                    Start a Project
                  </span>
                  <span className="hidden absolute bottom-0 left-0 w-[0.9rem] h-[0.125rem] bg-titleColor/60 group-hover:block"></span>
                </Link>
                <Link
                  href={"/#contact"}
                  className="px-[1.25rem] py-[0.6rem] rounded-full bg-titleColor text-containerColor tracking-wide text-center cursor-pointer hover:bg-titleColorDark transition duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="block md800:hidden">
              <span
                onClick={(e) => setShowHamMenu(true)}
                className="text-normalFont"
              >
                <RiMenu3Fill />
              </span>
              {showHamMenu && (
                <div className="fixed right-0 top-0 bottom-0 w-full bg-white bg-opacity-60">
                  <HamMenu closeMenu={() => setShowHamMenu(false)} />
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
