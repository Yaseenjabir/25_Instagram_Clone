const Designs = () => {
  return (
    <>
      <section className="px-5 mt-20 max-w-[976px] mx-auto">
        <div>
          <h1 className="font-semibold text-5xl mb-2">Design</h1>
          <p className="font-playfair text-2xl text-gray-500 mb-10">
            Editorial, branding, interface, ads, motion graphics
          </p>
        </div>
        <div className="min-h-10 mt-20 grid items-center gap-5 md:grid-cols-3 md:gap-5 w-full relative">
          <div className="w-full flex flex-col gap-5 items-center">
            <iframe
              src="https://giphy.com/embed/QsanqYoRLRp60Kb4ce"
              width="216"
              height="480"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
              style={{ pointerEvents: "none" }}
            ></iframe>
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "115%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/WM6tmuNpUhvepvjVKp"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 items-center">
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "95%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/Nuq8XnDEcfvIOPXVfZ"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "42%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/TduBgQq1T9yCJibD5a"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 items-center">
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "72%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/tQ0rArhvAVzMMkLMAD"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "71%",
                position: "relative",
              }}
            >
              <iframe
                src="https://giphy.com/embed/hp3O8SmKpALO1sQm56"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="absolute top-0 left-0 block w-full h-full z-10"></div>
        </div>
      </section>
    </>
  );
};

export default Designs;
