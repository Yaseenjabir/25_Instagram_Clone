import { CarouselCustomNavigation } from "./Carousel";

const Story = ({ title, desc, data }) => {
  return (
    <>
      <div className="max-w-[411px] mx-auto shadow-lg rounded-md hover:scale-105 transition-all ease-in-out duration-200 md:mx-0 md:w-[300px] border">
        <div>
          <CarouselCustomNavigation data={data} />
        </div>
        <div className="p-3 font-playfair">
          <h1 className="font-bold text-lg text-gray-900">{title}</h1>
          <p className="text-gray-600 text-lg">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Story;
