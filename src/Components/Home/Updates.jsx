import styles from "./Updates.module.css";

const Updates = () => {
  return (
    <>
      <div className="mt-20 max-w-[450px] mx-auto">
        <h1 className="font-playfair mb-10 text-lg">Updates</h1>
        <div className="relative bg-purple-900 text-white rounded-md">
          <div className="text-center z-10 relative flex flex-col gap-4 p-5">
            <div
              id={styles.content}
              className={`absolute top-0 left-0 w-full h-full bg-black rounded-md transition-all ease-in-out duration-300`}
            ></div>
            <h1 className="font-semibold text-xl">samson's shipping log</h1>
            <p className="text-sm font-light">
              A recap of the apps, content, and other projects I ship every
              month* (*usually more :P)
            </p>
            <span className="text-sm font-thin">By Samson Zhang</span>
            <div className="max-w-[400px] flex border-[2px] border-blue-600 relative z-10">
              <input
                className="w-[70%] rounded-sm px-2 py-1 text-sm outline-none text-white bg-transparent"
                type="text"
                placeholder="Type your email..."
              />
              <button className="w-[30%] bg-blue-600">Subscribe</button>
            </div>
            <p className="text-sm font-light">
              By subscribing you agree to Substack's Terms of Use, our Privacy
              Policy and our Information collection notice
            </p>
          </div>
          <div className="p-5 relative">
            <div
              id={styles.content}
              className={`absolute top-0 left-0 w-full h-full bg-black rounded-md transition-all ease-in-out duration-300`}
            ></div>
            <h1 className="text-gray-400 font-bold text-lg mb-2">
              MOST RECENT: FALL 2021
            </h1>
            <h1 className="text-gray-100 underline cursor-pointer">
              Data journalism, Updately updates, and writing about
              thermodynamics, ideology, and excellence
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
