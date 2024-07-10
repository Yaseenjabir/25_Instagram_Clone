import Creative from "./Creative";
import Essay from "./Essay";
import Journalism from "./Journalism";
import Relevant from "./Relevant";

const Wrapper = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Journalism />
        <div className="grid gap-4">
          <Creative />
          <Relevant />
          <Essay />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
