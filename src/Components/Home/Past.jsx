const Past = () => {
  return (
    <>
      <div className="mt-20 max-w-[450px] mx-auto">
        <h1 className="font-playfair mb-10 text-lg">portfolios</h1>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg">
              {" "}
              <span className="text-gray-600 font-semibold">
                Founder
              </span> of{" "}
              <span className="font-normal underline text-gray-500 cursor-pointer">
                Postulate
              </span>
            </h1>
            <p className="text-gray-400 font-light">
              My first startup. Selected to interview for YC S‘20
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg">
              {" "}
              <span className="text-gray-600 font-semibold">
                Organizer
              </span> of{" "}
              <span className="font-normal underline text-gray-500 cursor-pointer">
                Edyfi
              </span>
            </h1>
            <p className="text-gray-400 font-light">
              A network of micro-campuses for ambitious, brilliant 18-23yos
              outside of traditional institutions. Was a founding participant +
              S‘21 organizer
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-lg">
              {" "}
              <span className="text-gray-600 font-semibold">
                Product Intern
              </span>{" "}
              at{" "}
              <span className="font-normal underline text-gray-500 cursor-pointer">
                EV Connect
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
              <span className="font-normal underline text-gray-500 cursor-pointer">
                Cuely.ai, Tadpole Tutoring
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
        </div>
      </div>
    </>
  );
};

export default Past;
