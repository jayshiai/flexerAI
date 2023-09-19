const Tag = ({ text, icon }) => {
  return (
    <div className="w-[15vw] h-[5vw] lg:min-w-[200px] cursor-pointer rounded-full border-[#A418BA] border-2 lg:h-[60px] text-[#A418BA] text-3xl flex justify-center items-center ">
      {text}
      <span className=" ml-6">{icon} </span>
    </div>
  );
};

export default Tag;
