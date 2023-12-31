const LeadSlate = ({ title, name, phone }) => {
  return (
    <div className=" h-24 xl:h-16 col-span-2  rounded-2xl px-2 text-white">
      <div className=" tracking-widest font-light opacity-50 ">
        {title ? title : "Lead"}
      </div>
      <div className="text-3xl ">{name}</div>
      <div className="text-xs opacity-50">{phone}</div>
    </div>
  );
};

export default LeadSlate;
