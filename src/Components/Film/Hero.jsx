const Hero = () => {
  return (
    <>
      <section>
        <h1 className="font-semibold text-5xl mb-2">Film</h1>
        <p className="font-playfair text-2xl text-gray-500 mb-10">
          I'm handy with a camera and editing software. Not doing too much
          film/video stuff right now but here's a portfolio of my past work.
        </p>
        <div>
          <iframe
            className="mx-auto w-full min-h-[400px]"
            src="https://www.youtube.com/embed/CM5prTlxyUI?si=deqCrxLJrf3Ba0YO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Hero;
