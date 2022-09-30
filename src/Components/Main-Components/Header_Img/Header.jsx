import React, { useState, useEffect, useContext } from 'react';
import './header.css'
import { Context } from '../../../useContext__comp/Provider/AuthProvider'
import AOS from 'aos'
const Header = (props) => {
  const [propstata, setpropsdata] = useState([])
  const{lang,setlang}=useContext(Context)
  useEffect(() => {

    {
      (lang == "uz" ? setpropsdata(props.data[0]) : setpropsdata(props.data[1]))
    }
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [lang])
  return (
    <div className="Header_img" style={{ backgroundImage: `url(${propstata.bg_img})` }} >
      <h1 data-aos="fade-right" className='text-center text-white h1'>{propstata.text1}  </h1>
      <h1 data-aos="fade-right" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" className='text-center text-white'>{propstata.text2} </h1>
    </div>
  );
}

export default Header;
