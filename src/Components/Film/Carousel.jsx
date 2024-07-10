import { Carousel } from "@material-tailwind/react";
export function CarouselCustomNavigation({ data }) {
  const images = data;
  return (
    <Carousel
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((item, index) => (
        <img
          key={index}
          src={item}
          alt="image 1"
          className="h-[200px] w-full object-cover"
        />
      ))}
    </Carousel>
  );
}
