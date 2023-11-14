import { IoBagCheck, IoConstructSharp } from "react-icons/io5";

const Descriptions = () => {
  return (
    <div className="flex_col gap-[3rem]">
      <div className="flex_col gap-[0.5rem]">
        <h2 className="title_h2 spaced">NyumbaHub MERN Stack</h2>
        <p className="line-clamp-6">
          NyumbaHub is a vacant houses finding service based in Kenya. It
          includes a non-relational database MongoDB, Node/Express.js RESTful
          API hosted as a serverless function, and a React frontend where the
          house properties data is served to.\n\nThe API employs the MVC design
          pattern. Using mongoose ODM (Object-Data Modelling), there are defined
          schemas for the 4 models used throughout the application. Public
          routes are available to all users while private routes are protected
          with JSON Web Token (JWT) and either require signing in to access
          {/* service or can only be accessed by privileged users. Images are
          uploaded to cloudinary with the help of multer and sharp. The backend
          accepts URL query from a request to query the database and return
          filtered and/or sorted response data. It is a serverless function and
          has a UI to help users efficiently navigate through it.\n\nThe
          application's frontend includes an aesthetic, functional and easy to
          use fully responsive UI that enhances UX while still putting the UI/UX
          design principles into consideration. With Redux and redux toolkit the
          application is able to manage the state effectively, thanks to
          createAsyncThunk() the frontend can make API calls and handle loading,
          success and error states in async operations. It has a number of
          navigation options including breadcrumbs, pagination, ham menu for
          mobile and header navigation. To enhance security, the frontend will
          privatize routes that need not be open.\n\nAlso included in the
          application is the well-outlined terms of service in the Terms of
          Service page and privacy policy in the Privacy Policy page. */}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[1rem]">
        <div className="flex gap-[0.5rem] items-start">
          <span className="p-[4px] text-h3 rounded-full bg-titleColor text-bodyColor">
            <IoBagCheck />
          </span>
          <div className="flex_col gap-[0.5rem]">
            <h4 className="title_normal_bold">Features</h4>
            <div className="flex_col gap-[0.125rem]">
              {[
                "Fully responsive",
                "Private and open routes",
                "Pagination",
                "Breadcrumbs",
                "Horizontal scrolling",
                "Dynamic pages titling",
                "Privacy",
                "Policy",
                "Terms of Service",
              ].map((ft, indx) => {
                return (
                  <span key={indx} className="leading-auto">
                    {ft}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex gap-[0.5rem] items-start">
          <span className="p-[4px] text-h3 rounded-full bg-titleColor text-bodyColor">
            <IoConstructSharp />
          </span>
          <div className="flex_col gap-[0.5rem]">
            <h4 className="title_normal_bold">Technologies</h4>
            <div className="flex_col gap-[0.125rem]">
              {[
                "React",
                "Node/Express.js",
                "Firebase",
                "Redux",
                "Tailwind",
                "EmailJS",
                "Font Awesome",
                "React Router",
                "React",
              ].map((tch, indx) => {
                return (
                  <span key={indx} className="leading-auto">
                    {tch}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[1rem] items-center">
        <span className="px-[1.5rem] py-[0.75rem] rounded-full text-titleColor border-2 border-titleColor">
          View on GitHub
        </span>
        <span className="px-[1.5rem] py-[0.75rem] rounded-full bg-titleColor text-containerColor">
          Visit Website
        </span>
      </div>
    </div>
  );
};

export default Descriptions;
