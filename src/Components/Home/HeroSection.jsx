import img from "./assets/hero.png";

const HeroSection = () => {
  return (
    <>
      <img src={img} alt="korean-guy" className="rounded-full mb-10" />
      <h1 className="text-4xl leading-[50px] text-gray-800">
        Hi, I'm Samson. I love building things and telling stories.
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-lg text-gray-500 font-playfair">
        <p>
          I’m a Media Studies and Physics major at{" "}
          <span className="underline cursor-pointer">Pomona College</span> .
        </p>
        <p>
          I write a lot about{" "}
          <span className="underline cursor-pointer">AAPI politics</span>, tech
          culture, and whatever I'm learning in classes, from books and
          conversations, or just on my own.
        </p>
        <p>
          I also make a lot of websites and webapps: recently I've been working
          on{" "}
          <span className="underline cursor-pointer">Updately, Postulate,</span>{" "}
          and various data journalism pieces.
        </p>
        <p>
          If you know me from{" "}
          <span className="underline cursor-pointer">Twitter</span> it's
          probably because I was the co-organizer of{" "}
          <span className="underline cursor-pointer">Edyfi's</span> Mill Valley
          co-living house.
        </p>
      </div>
    </>
  );
};

export default HeroSection;
