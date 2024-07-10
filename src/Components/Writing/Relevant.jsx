const Relevant = () => {
  return (
    <>
      <div className="my-20 max-w-[400px] h-min">
        <h1 className="font-playfair mb-10 text-lg">Relevant experience</h1>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg">
              {" "}
              <span className="text-gray-600 font-semibold">
                Editor
              </span> at{" "}
              <span className="font-normal underline text-gray-500 cursor-pointer">
                The Yappie
              </span>
            </h1>
            <p className="text-gray-400 font-light">
              The only independent publication dedicated to AAPI politics and
              power. Read by members of Congress, the White House, and leading
              advocacy organizations.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-xl font-playfair">
              {" "}
              <span className="text-gray-600 font-bold">
                Staff Writer
              </span> at{" "}
              <span className="font-normal underline text-gray-500 cursor-pointer">
                The Student Life
              </span>
            </h1>
            <h1 className="text-xl font-playfair">
              {" "}
              <span className="text-gray-600 font-bold">
                Executive Board Member
              </span>{" "}
              at{" "}
              <span className="font-normal underline text-gray-500 cursor-pointer">
                The Incandescent Review
              </span>
            </h1>
            <h1 className="text-xl font-playfair">
              {" "}
              <span className="text-gray-600 font-bold">
                Executive Digital Editor
              </span>{" "}
              at{" "}
              <span className="font-normal underline text-gray-500 cursor-pointer">
                The Phillipian
              </span>
            </h1>
            <a className="w-[120px] underline text-gray-500 cursor-pointer">
              Full Resume
            </a>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};
export default Relevant;
