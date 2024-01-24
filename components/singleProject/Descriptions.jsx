"use client";

import { useRef } from "react";
import { IoBagCheck, IoConstructSharp } from "react-icons/io5";

import ReadMoreOrLessText from "../ReadMoreOrLessText";
import FadeIn from "../FadeIn";
import IconComplement from "../IconComplement";

const Descriptions = ({
  name,
  fullDescription,
  features,
  technologies,
  websiteLink,
  gitHubLink,
}) => {
  const descriptionRef = useRef();

  return (
    <div className="flex_col gap-[3rem]">
      <div className="flex_col gap-[0.5rem]">
        <h2 className="title_h2 spaced capitalize">{name}</h2>

        <ReadMoreOrLessText
          nodeRef={descriptionRef}
          text={fullDescription}
          linesClampStyle={"line_clamp_7"}
        />
      </div>

      <div className="grid grid-cols-2 gap-[1rem] sm:gap-[0.5rem]">
        <div className="flex gap-[0.5rem] items-start">
          <IconComplement icon={<IoBagCheck />} />
          <div className="flex_col gap-[0.5rem]">
            <h4 className="title_normal_bold">Features</h4>
            <div className="flex_col gap-[0.125rem]">
              {features?.map((feature, index) => {
                return (
                  <span key={index} className="leading-auto line-clamp-1">
                    {feature}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex gap-[0.5rem] items-start">
          <IconComplement icon={<IoConstructSharp />} />
          <div className="flex_col gap-[0.5rem]">
            <h4 className="title_normal_bold">Technologies</h4>
            <div className="flex_col gap-[0.125rem]">
              {technologies?.map((technology, index) => {
                return (
                  <span key={index} className="leading-auto line-clamp-1">
                    {technology}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[1rem] items-center">
        <a href={`${gitHubLink}`} className="outline_button">
          View on GitHub
        </a>
        <a href={`${websiteLink}`} className="filled_button">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default Descriptions;
