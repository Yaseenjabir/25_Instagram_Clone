import Currently from "./Currently";
import Past from "./Past";
import Portfolio from "./Portfolio";
import Updates from "./Updates";

const Wrapper = () => {
  return (
    <>
      <div className="md:flex md:flex-wrap gap-5">
        <Updates />
        <Portfolio />
        <Currently />
        <Past />
      </div>
    </>
  );
};
export default Wrapper;
