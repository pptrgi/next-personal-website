"use client";

import { useRouter } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";

import ReadMoreOrLessText from "../ReadMoreOrLessText";

const ProjectCard = ({ styles, name, summary, nameSlug }) => {
  // let theRef = `${name.split("").join("").toLowerCase()}Ref`;
  // theRef = useRef();
  const router = useRouter();

  const handleSeeMore = (nameSlug) => {
    router.push(`/project/${nameSlug}`);
  };

  return (
    <div className="relative group col-span-1 z-20 overflow-hidden md480:col-span-4">
      <div
        className={`${styles} w-full rounded-[1.25rem] px-[0.75rem] py-[1rem] z-20`}
      >
        <div className="flex_center w-full min-h-[180px] md480:min-h-[200px] lg1023:min-h-[180px]">
          <h3 className="z-20 text-h3Font font-semibolded text-containerColor/70 text-center tracking-wider capitalize">
            {name}
          </h3>
        </div>
      </div>

      <div className="absolute left-0 right-0 -bottom-[100vh] px-[0.75rem] py-[1.25rem] bg-containerColor border-[2px] border-neutral-200/40 rounded-[1rem] group-hover:top-0 group-hover:bottom-0 group-hover:z-30 transition-all duration-500">
        <div className="flex_center w-full h-full">
          <div className="flex_col gap-[2rem] md480:gap-[1rem] lg1023:gap-[2rem]">
            <p className="text-center">{summary}</p>
            <div className="flex flex-row justify-center items-center gap-[0.75rem] w-full md480:flex-col lg1023:flex-row md480:gap-[0.25rem] lg1023:gap-[0.75rem]">
              <span className="filled_button">Visit Website</span>
              <span
                onClick={(e) => handleSeeMore(nameSlug)}
                className="outline_button"
              >
                See more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
