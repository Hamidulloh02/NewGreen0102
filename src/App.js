import React, { useEffect, useState } from "react";
//Components
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Main_animation from "./Components/Animation/Main-animation/Main_animation";
import Map from './Components/Contact_page/contact_get_info/Get_Inputs'
function App() {
  const [animated, setanimated] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setanimated(false);
    }, 2000);
  });
  return (
    <div className="App">
      {animated === true ? (
        <Main_animation />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Map/>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
