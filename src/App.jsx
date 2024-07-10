import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Main";
import Navbar from "./Components/Navbar/Navabr";
import CodingBuilding from "./Components/Coding & Building/CodingBuilding";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Writing from "./Components/Writing/Writing";
import Film from "./Components/Film/Film";
import Photo from "./Components/Photos/Photos";
import Designs from "./Components/Designs/Designs";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/writing" element={<Writing />} />
              <Route path="/coding&building" element={<CodingBuilding />} />
              <Route path="/film" element={<Film />} />
              <Route path="/photo" element={<Photo />} />
              <Route path="/designs" element={<Designs />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
