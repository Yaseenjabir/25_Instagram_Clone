import Hero from "./Hero";
import OpenSource from "./OpenSource";
import Packages from "./Packages";
import Projects from "./Projects";
import Relevant from "./Relevant";

const BuildingAndCoding = () => {
  return (
    <>
      <div className="px-5 max-w-[976px] mx-auto">
        <Hero />
        <Projects />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 ">
          <div>
            <Relevant />
            <OpenSource />
          </div>
          <Packages />
        </div>
      </div>
    </>
  );
};
export default BuildingAndCoding;
