import React, { useEffect,useState } from "react";
//Components
import Navbar from "./Components/Navbar/Navbar"
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Main_animation from "./Components/Animation/Main-animation/Main_animation";
import Japan_animation from './Components/Animation/Main-animation/Japan/Japan_animation'
import Map from './Components/Contact_page/contact_get_info/Get_Inputs'
import AuthPriveder from "./useContext__comp/Provider/AuthProvider";
import Text from './Components/Main-Components/Text_content/Text'
import textjson from './Components/Intern_viza/Text.json'
import AuthProvider from "./useContext__comp/Provider/AuthProvider";
import { Context } from "./useContext__comp/Provider/AuthProvider";
import Work from './Components/Work/Work'

// import Work from './Components/Work/Work'
function App() {
  const [animated, setanimated] = useState(true);
  // const{lang,setlang}=useContext(Context)
  useEffect(() => {
    setTimeout(() => {
      setanimated(false);
    }, 2000);
  },[]);
  return (


    <AuthProvider>
      {animated === true ? (
        <Main_animation />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}

    </AuthProvider>
   
  

    // <div>
    //   <Japan_animation/>
    // </div>
  );
}
export default App;
