"use client";

import { useParams } from "next/navigation";

import Descriptions from "../../../components/singleProject/Descriptions";
import Images from "../../../components/singleProject/Images";
import { findProject } from "@/utils/findProject";
import FadeIn from "@/components/FadeIn";

const Project = () => {
  const { projectNameSlug } = useParams();

  // find the project
  const project = findProject(projectNameSlug);

  return (
    <FadeIn>
      <div className="custom_container section_after_header pb-[4rem]">
        <div className="flex_center w-full">
          <div className="grid grid-cols-1 gap-[3.25rem] lg1023:grid-cols-6 lg1023:gap-[2rem]">
            <section className="col-span-1 lg1023:col-span-3">
              <Descriptions
                name={project?.name}
                fullDescription={project?.fullDescription}
                features={project?.features}
                technologies={project?.technologies}
                websiteLink={project?.websiteLink}
                gitHubLink={project?.gitHubLink}
              />
            </section>
            <section className="col-span-1 lg1023:col-span-3">
              <Images images={project?.images} />
            </section>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Project;
