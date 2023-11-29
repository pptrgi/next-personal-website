"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

import useClickOutsideClose from "@/hooks/useClickOutsideClose";

const HamMenu = ({ closeMenu }) => {
  const hamRef = useRef();

  // close menu when the outside is closed
  useClickOutsideClose(hamRef, closeMenu);

  return (
    <motion.div
      ref={hamRef}
      variants={{
        hidden: { opacity: 0, x: "-100vw" },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{
        type: "spring",
        ease: "easeInOut",
        stiffness: 30,
        mass: 0.5,
        damping: 7,
      }}
      initial="hidden"
      animate="visible"
      className="relative flex_center w-[75%] h-full bg-bodyColor md480:w-[60%]"
    >
      <div className="flex_col gap-[1.75rem]">
        <div className="flex_col gap-[1rem] items-center">
          <Link
            onClick={(e) => closeMenu()}
            href={"/"}
            className="relative group"
          >
            <span className="tracking-wide text-titleColor/60 group-hover:text-titleColor">
              Home
            </span>
            <span className="hidden absolute bottom-0 left-0 w-[0.9rem] h-[0.125rem] bg-titleColor/60 group-hover:block"></span>
          </Link>
          <Link
            onClick={(e) => closeMenu()}
            href={"/#about"}
            className="relative group"
          >
            <span className="tracking-wide text-titleColor/60 group-hover:text-titleColor">
              About
            </span>
            <span className="hidden absolute bottom-0 left-0 w-[0.9rem] h-[0.125rem] bg-titleColor/60 group-hover:block"></span>
          </Link>
          <Link
            onClick={(e) => closeMenu()}
            href={"/#projects"}
            className="relative group"
          >
            <span className="tracking-wide text-titleColor/60 group-hover:text-titleColor">
              Projects
            </span>
            <span className="hidden absolute bottom-0 left-0 w-[0.9rem] h-[0.125rem] bg-titleColor/60 group-hover:block"></span>
          </Link>
        </div>

        <div className="flex_col gap-[1rem] items-center">
          <Link
            onClick={(e) => closeMenu()}
            href={"/#cta"}
            className="relative group"
          >
            <span className="tracking-wide text-titleColor/60 group-hover:text-titleColor">
              Start Project
            </span>
            <span className="hidden absolute bottom-0 left-0 w-[0.9rem] h-[0.125rem] bg-titleColor/60 group-hover:block"></span>
          </Link>
          <Link
            onClick={(e) => closeMenu()}
            href={"/#contact"}
            className="filled_button"
          >
            Contact
          </Link>
        </div>
      </div>
      <span
        onClick={(e) => closeMenu()}
        className="absolute top-[2rem] right-[1.5rem] text-normalFont"
      >
        <IoClose />
      </span>
      <div className="absolute bottom-[1.25rem] flex_center w-full">
        <p className="text-tiny">
          Copyright &#169; {new Date().getFullYear()}. p.Gitonga
        </p>
      </div>
    </motion.div>
  );
};

export default HamMenu;
