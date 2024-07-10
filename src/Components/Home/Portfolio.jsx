const Portfolio = () => {
  return (
    <>
      <div className="mt-20 max-w-[450px] mx-auto">
        <h1 className="font-playfair mb-10 text-lg">portfolios</h1>
        <div className="flex flex-wrap gap-5">
          <button className="select-none px-7 border py-6 rounded-full shadow-md">
            Writing
          </button>
          <button className="select-none px-7 border py-6 rounded-full shadow-md">
            Code & Building
          </button>
          <button className="select-none px-7 border py-6 rounded-full shadow-md">
            Design
          </button>
          <button className="select-none px-7 border py-6 rounded-full shadow-md">
            Photo
          </button>
          <button className="select-none px-7 border py-6 rounded-full shadow-md">
            Film
          </button>
          <button className="select-none px-7 border py-6 rounded-full shadow-md">
            Newsletter
          </button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
