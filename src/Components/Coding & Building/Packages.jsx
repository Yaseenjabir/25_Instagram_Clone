import { PackagesData } from "./assets/PackagesData";
import PackagesList from "./PackagesList";
const Packages = () => {
  const data = PackagesData;
  return (
    <>
      <section className="mt-20">
        <h1 className="text-2xl mb-10">Projects</h1>
        <div className="flex flex-col gap-16">
          {data.map((item, index) => (
            <PackagesList key={index} data={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Packages;
