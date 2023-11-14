import React from "react";
import Descriptions from "../components/singleProject/Descriptions";
import Images from "../components/singleProject/Images";

const Project = () => {
  return (
    <div className="custom_container section_after_header pb-[4rem]">
      <div className="flex_center w-full">
        <div className="grid grid-cols-1 gap-[2rem] md800:grid-cols-6">
          <section className="col-span-1 md800:col-span-3">
            <Descriptions />
          </section>
          <section className="col-span-1 md800:col-span-3">
            <Images />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Project;
