const Tag = ({ text, icon }) => {
  return (
    <div className="w-[15vw] h-[5vw] lg:w-[200px] rounded-full border-purple-700 border-2 lg:h-[60px] text-purple-700 text-3xl flex justify-center items-center ">
      {text}
      <span className=" ml-6">{icon} </span>
    </div>
  );
};

export default Tag;