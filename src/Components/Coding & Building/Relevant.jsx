const Relevant = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="mb-10 font-playfair text-lg font-semibold">
          Relevant Experience
        </h1>
        <div className="flex flex-col gap-6">
          <h1 className="text-lg">
            {" "}
            <span className="text-gray-600 font-semibold">Founder</span> of{" "}
            <span className="font-normal underline text-gray-500 cursor-pointer">
              Postulate
            </span>
          </h1>
          <h1 className="text-lg">
            {" "}
            <span className="text-gray-600 font-semibold">
              PM and SWE
            </span> at{" "}
            <span className="font-normal underline text-gray-500 cursor-pointer">
              StartupTree
            </span>
          </h1>
          <h1 className="text-lg">
            {" "}
            <span className="text-gray-600 font-semibold">SWE</span> at{" "}
            <span className="font-normal text-gray-500 cursor-pointer">
              Cuely.ai, Tadpole Tutoring
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Relevant;
