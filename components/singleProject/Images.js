import FadeIn from "../FadeIn";

const Images = ({ images }) => {
  return (
    <FadeIn>
      <div className="grid grid-cols-2 gap-[1rem] md480:gap-x-[1.75rem] md480:gap-y-[1rem] lg1023:gap-[1rem] md480:pr-[2rem] md800:pr-[3rem] lg1023:pr-0">
        {images?.map((image, index) => {
          return (
            <div
              key={index}
              className="flex_col gap-[1rem] p-[0.5rem] bg-containerColor border-[1.8px] border-textColor/25 rounded-md md800:p-[1rem] lg1023:p-[0.6rem]"
            >
              <img
                src={`${image?.source}`}
                className="rounded-t-md"
                alt={image?.text}
              />
              <div className="flex_center w-full">
                <p className="font-semibolded spaced">{image?.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </FadeIn>
  );
};

export default Images;
