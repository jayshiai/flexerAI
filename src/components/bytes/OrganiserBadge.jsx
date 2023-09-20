const OrganiserBadge = ({ text }) => {
  return (
    <div className="w-[50px] h-[15px]  cursor-pointer rounded-full border-[#A418BA] border font-semibold text-[#A418BA] text-xs  flex justify-center items-center ">
      {text}
    </div>
  );
};

export default OrganiserBadge;
