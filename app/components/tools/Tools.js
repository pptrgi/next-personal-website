import { tools } from "./ToolsData";

const Tools = () => {
  return (
    <section className="custom_container section">
      <div className="flex_center w-full">
        <div className="flex_col gap-[2rem] w-full items-center">
          <h4 className="title_h3 spaced text-center">
            Some of the Tools and Technologies I use to Lifen products
          </h4>
          <div className="w-full">
            <div className="grid grid-cols-3 gap-[0.75rem] w-full xs:grid-cols-2 xs:gap-[1rem] md480:gap-[0.5rem] md480:grid-cols-4 md800:grid-cols-5 lg1023:grid-cols-6">
              {tools?.map((tool, index) => {
                return (
                  <div key={index} className="flex gap-[0.6rem] items-center">
                    <span className="text-h3">{tool?.icon}</span>
                    <span className="spaced">{tool?.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
