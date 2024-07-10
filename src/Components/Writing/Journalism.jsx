import { JournalismData } from "./assests/JournalismData";
const Journalism = () => {
  const data = JournalismData;

  return (
    <>
      <section className="mt-20 max-w-[400px]">
        <h1 className="text-2xl mb-10">Journalism</h1>
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

export default Journalism;
