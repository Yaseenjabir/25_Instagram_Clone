const OpenSourceList = ({ data }) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <a className="text-xl text-gray-700 cursor-pointer">{data.title}</a>
        <p className="text-gray-500 text-lg">{data.desc}</p>
        <div className="flex gap-5">
          {data.tags.map((item, index) => (
            <a
              key={index}
              className="py-1 px-3 bg-gray-300 rounded-full text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default OpenSourceList;
