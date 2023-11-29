"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const ActiveHeader = ({ to, linkName }) => {
  const [activeHeader, setActiveHeader] = useState("/");
  console.log(activeHeader);
  console.log(to?.includes(activeHeader));

  return (
    <Link
      href={to}
      className="relative group"
      onClick={(e) => setActiveHeader(linkName)}
    >
      <span
        className={`tracking-wide text-titleColor/60 ${
          to?.includes(activeHeader) && "text-titleColor"
        } group-hover:text-titleColor`}
      >
        {linkName}
      </span>
      <span
        className={`hidden absolute bottom-0 left-0 w-[0.9rem] h-[0.125rem] bg-titleColor/60 ${
          to?.includes(activeHeader) && "block"
        } group-hover:block`}
      ></span>
    </Link>
  );
};

export default ActiveHeader;
