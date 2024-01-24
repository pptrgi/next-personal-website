"use client";

import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex_center h-full w-full">
        <div className="flex_col gap-[2rem]">
          <div className="flex_col gap-[0.75rem] items-center">
            <h1 className="text-[4rem] leading-none">404</h1>
            <h3 className="text-h2Font leading-none">Page not found</h3>
          </div>
          <p className="text-textColor/90">
            Uh-oh, not the page you were looking for
          </p>
          <div className="flex_center w-full">
            <Link href={"/"} className="filled_button w-fit">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
