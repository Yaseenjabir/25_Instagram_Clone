import Hero from "./Hero";
import Story from "./Story";
import {
  hopperImgs,
  ANL2018,
  Bulfinch,
  HeadPhones,
  Admission,
} from "./assets/ImagesData";
const Film = () => {
  return (
    <>
      <div className="mt-20 max-w-[976px] mx-auto px-5">
        <Hero />
        <div className="mt-16 flex flex-col gap-10 flex-wrap md:flex-row items-center justify-center ">
          <Story
            title={"The Stories of Grasshopper 2018"}
            desc={
              "12-minute documentary about Andover's biggest and all-student-produced talent show."
            }
            data={hopperImgs}
          />
          <Story
            title={"John's Plan / ANL 2018"}
            desc={
              "Music video for parody of God's Plan for Under the Bed's annual show, Andover Night Live"
            }
            data={ANL2018}
          />
          <Story
            title={"Bulfinch Hall Bicentennial — 200 Years of History"}
            desc={
              "Four minute mini-doc about a historic building, published on The Phillipian"
            }
            data={Bulfinch}
          />
          <Story
            title={"P6 Headphones Review"}
            desc={
              "8-minute YouTube video review of the Sound Intone P6 headphones."
            }
            data={HeadPhones}
          />
          <Story
            title={"Andover Admissions"}
            desc={
              "Five 1-2 minute department highlight videos made for Andover's admissions office"
            }
            data={Admission}
          />
        </div>
      </div>
    </>
  );
};

export default Film;
