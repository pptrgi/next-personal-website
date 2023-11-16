const Images = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-[1rem] md480:gap-x-[1.75rem] md480:gap-y-[1rem] lg1023:gap-[1rem]">
      <div className="flex_col gap-[1rem] p-[0.5rem] bg-containerColor border-[1px] border-textColor rounded-md">
        <img src="/images/p640.png" alt="project" />
        <div className="flex_center w-full">
          <p className="font-semibolded spaced">Hero Section</p>
        </div>
      </div>
      <div className="flex_col gap-[1rem] p-[0.5rem] bg-containerColor border-[1px] border-textColor rounded-md">
        <img src="/images/p640.png" alt="project" />
        <div className="flex_center w-full">
          <p className="font-semibolded spaced">Hero Section</p>
        </div>
      </div>
      <div className="flex_col gap-[1rem] p-[0.5rem] bg-containerColor border-[1px] border-textColor rounded-md">
        <img src="/images/p640.png" alt="project" />
        <div className="flex_center w-full">
          <p className="font-semibolded spaced">Hero Section</p>
        </div>
      </div>
      <div className="flex_col gap-[1rem] p-[0.5rem] bg-containerColor border-[1px] border-textColor rounded-md">
        <img src="/images/p640.png" alt="project" />
        <div className="flex_center w-full">
          <p className="font-semibolded spaced">Hero Section</p>
        </div>
      </div>
    </div>
  );
};

export default Images;
