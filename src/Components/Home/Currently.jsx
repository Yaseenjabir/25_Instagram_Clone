const Currently = () => {
  return (
    <>
      <div className="mt-20 max-w-[450px] mx-auto">
        <h1 className="font-playfair mb-10 text-lg">portfolios</h1>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="tracking-wider">
              <span className="font-playfair text-xl font-bold text-gray-800">
                Editor{" "}
              </span>
              at
              <span className="font-playfair text-lg underline text-gray-700">
                {" "}
                The Yappie
              </span>
            </h1>
            <p className="text-gray-500">
              The only independent publication dedicated to AAPI politics and
              power. Read by members of Congress, the White House, and leading
              advocacy organizations.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="tracking-wider">
              <span className="font-playfair text-xl font-bold text-gray-800">
                Staff Writter{" "}
              </span>
              at
              <span className="font-playfair text-lg underline text-gray-700">
                {" "}
                The Student Life
              </span>
            </h1>
            <h1 className="tracking-wider">
              <span className="font-playfair text-xl font-bold text-gray-800">
                Student{" "}
              </span>
              at
              <span className="font-playfair text-lg underline text-gray-700">
                {" "}
                Pomona College
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Currently;
