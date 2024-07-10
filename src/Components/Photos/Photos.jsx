import { Images, Images2 } from "./assets/Images";

const Photo = () => {
  return (
    <>
      <section className="px-5 mt-20 max-w-[976px] mx-auto">
        <div>
          <h1 className="font-semibold text-5xl mb-2">Photo</h1>
          <p className="font-playfair text-2xl text-gray-500 mb-10">
            Photojournalism, portraits, events
          </p>
        </div>
        <div className="min-h-10 mt-20 grid items-center md:grid-cols-2 grid-flow-dense md:gap-5">
          <div className="flex flex-col gap-5">
            {Images.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  className="w-full md:min-h-[330px]"
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-5">
            {Images2.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  className="w-full md:min-h-[330px]"
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Photo;
