import { useReducer } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const reducer = (state, action) => {
  switch (action.type) {
    case "hamburger":
      return "translate-x-0";
    case "close":
      return "translate-x-[100%]";
  }
};

const Navbar = () => {
  const [translate, dispatch] = useReducer(reducer, "translate-x-[100%]");
  const handleType = (type) => {
    dispatch({ type });
  };
  return (
    <>
      <div
        className="w-full h-[80px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(244,244,245,1) 100%)",
        }}
        id="header"
      ></div>
      <header className="max-w-[976px] mx-auto">
        <nav
          id="nav"
          className="px-5 py-3 flex justify-between items-center top-[80px]"
        >
          <Link to="/" className="font-bold font-playfair text-3xl">
            SZ.
          </Link>
          <div
            className="w-[25px] flex flex-col gap-1 before:content-[''] relative before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full cursor-pointer md:hidden"
            onClick={() => dispatch({ type: "hamburger" })}
          >
            <hr className="border-[1px] border-gray-300" />
            <hr className="border-[1px] border-gray-300" />
            <hr className="border-[1px] border-gray-300" />
          </div>
          <ul className="gap-4 text-lg items-end text-gray-600 w-[610px] hidden md:flex">
            <Link
              to={"/writing"}
              className="cursor-pointer hover:text-blue-500 duration-200 transition-all ease-in-out"
            >
              Writing
            </Link>
            <Link
              to={"/coding&building"}
              className="cursor-pointer hover:text-blue-500 duration-200 transition-all ease-in-out"
            >
              Code & Building
            </Link>
            <Link
              to={"/designs"}
              className="cursor-pointer hover:text-blue-500 duration-200 transition-all ease-in-out"
            >
              Design
            </Link>
            <Link
              to={"/photo"}
              className="cursor-pointer hover:text-blue-500 duration-200 transition-all ease-in-out"
            >
              Photo
            </Link>
            <Link
              to={"/film"}
              className="cursor-pointer hover:text-blue-500 duration-200 transition-all ease-in-out"
            >
              Film
            </Link>
          </ul>
        </nav>
      </header>
      <div
        className={`bg-white fixed right-0 top-0 w-[75%] min-h-[100vh] flex justify-end items-center px-5 ${translate} transition-all ease-in-out duration-300 md:hidden z-[1000]`}
      >
        <ul className="flex flex-col gap-4 text-lg items-end text-gray-600">
          <Link
            to={"/"}
            className="cursor-pointer hover:text-blue-500 duration-200 transition-all ease-in-out"
            onClick={() => handleType("close")}
          >
            Home
          </Link>
          <Link
            to={"/writing"}
            className="cursor-pointer hover:text-blue-500 duration-200 transition-all ease-in-out"
            onClick={() => handleType("close")}
          >
            Writing
          </Link>
          <Link
            to={"/coding&building"}
            className="cursor-pointer hover:text-blue-500 duration-200 transition-all ease-in-out"
            onClick={() => handleType("close")}
          >
            Code & Building
          </Link>
          <Link
            to={"/designs"}
            className="cursor-pointer hover:text-blue-500 duration-200 transition-all ease-in-out"
            onClick={() => handleType("close")}
          >
            Design
          </Link>
          <Link
            to={"/photo"}
            className="cursor-pointer hover:text-blue-500 duration-200 transition-all ease-in-out"
            onClick={() => handleType("close")}
          >
            Photo
          </Link>
          <Link
            to={"/film"}
            className="cursor-pointer hover:text-blue-500 duration-200 transition-all ease-in-out"
            onClick={() => handleType("close")}
          >
            Film
          </Link>
        </ul>
        <button
          className="absolute top-6 right-6 text-xl"
          onClick={() => dispatch({ type: "close" })}
        >
          <IoMdClose />
        </button>
      </div>
    </>
  );
};

export default Navbar;
