import OpenSourceList from "./OpenSourceList";
import { OpenSourceData } from "./assets/OpenSourceData";
const OpenSource = () => {
  const data = OpenSourceData;
  return (
    <>
      <section className="mt-20">
        <h1 className="text-2xl mb-10">Open Source Contributions</h1>
        <div className="flex flex-col gap-16">
          {data.map((item, index) => (
            <OpenSourceList key={index} data={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default OpenSource;
