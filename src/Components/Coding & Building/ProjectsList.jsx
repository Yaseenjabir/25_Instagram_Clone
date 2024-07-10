const ProjectsList = ({ data }) => {
  return (
    <>
      <div className="flex flex-col gap-7">
        <div>
          <h1 className="text-gray-600 mb-2">{data.title}</h1>
          <p className="text-gray-500">{data.desc}</p>
        </div>
        <img
          className="rounded-md hover:shadow-lg transition-all ease-in-out duration-150 cursor-pointer"
          src={data.img}
        />
        <div className="flex gap-3">
          {data.tags.map((item, index) => (
            <a
              key={index}
              className="bg-gray-200 rounded-full py-1 px-2 text-sm"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <hr />
      </div>
    </>
  );
};
export default ProjectsList;
