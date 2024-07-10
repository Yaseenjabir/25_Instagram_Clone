import { EssayData } from "./assests/EssayData";
const Essay = () => {
  const data = EssayData;

  return (
    <>
      <section className="mt-20 md:mt-0 max-w-[450px]">
        <h1 className="text-2xl mb-10">Essay</h1>
        <div className="flex flex-col gap-8">
          {data.map((item, index) => {
            return (
              <>
                <div>
                  <h1 className="font-playfair text-gray-500 mb-2">
                    {item.name}
                  </h1>
                  <p className="font-playfair font-medium text-lg">
                    {item.title}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Essay;
