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

  return (
    <div className="flex_col gap-[0.25rem]">
      <p ref={nodeRef} className={`${clamped ? `${linesClampStyle}` : ""}`}>
        {text}
      </p>
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
