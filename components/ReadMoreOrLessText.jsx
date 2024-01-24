"use client";

import { useState, useEffect } from "react";

const ReadMoreOrLessText = ({ nodeRef, text, linesClampStyle }) => {
  const [clamped, setClamped] = useState(true);
  const [showReadTextButtons, setShowReadTextButtons] = useState(false);

  useEffect(() => {
    setShowReadTextButtons(
      nodeRef.current.scrollHeight !== nodeRef.current.clientHeight
    );
  }, []);

  // split multiple paragraphs
  const textsArray = text?.split("\n");

  return (
    <div className="flex_col gap-[0.25rem]">
      <div
        ref={nodeRef}
        className={`${
          clamped ? `${linesClampStyle}` : ""
        } flex_col gap-[0.75rem]`}
      >
        {textsArray?.map((splitText, index) => {
          return <p className="">{splitText}</p>;
        })}
      </div>
      {showReadTextButtons && (
        <span
          onClick={(e) => setClamped(!clamped)}
          className="text-titleColorDark tracking-wider font-semibolded w-fit cursor-pointer top_shadow pl-[0.25rem]"
        >
          {clamped ? "Read more" : "Read less"}
        </span>
      )}
    </div>
  );
};

export default ReadMoreOrLessText;
