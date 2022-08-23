import React, { useEffect, useState, useContext } from 'react'
import "./Main.css"
import { Context } from "../../../useContext__comp/Provider/AuthProvider"
//import Json
import homejson from "./main.json"
import AOS from "aos"
function Main() {
  const [homedata, sethomedata] = useState([])
  const { lang, setlang } = useContext(Context)
  useEffect(() => {

    {
      (lang == "uz" ? sethomedata(homejson[0]) : sethomedata(homejson[1]))
    }

    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [lang])
  console.log(homedata)
  return (
    <>
      <div className='mainbody' data-aos="zoom-in" style={{ backgroundImage: `url(${homedata.bg_img})` }} >
        <div className='container'>
          <div className='my-card d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-center align-items-center'>
            <div className=' col-lg-6 col-md-6 col-sm-12 p-3'>
              <h1>{homedata.text1}</h1>
              <h1>{homedata.text2}</h1>
              <p>{homedata.text3}</p>
              <div className='btns'>
                <button className='btn1'>{homedata.btn1text}</button>
                <button className='btn2'>{homedata.btn2text}</button>
              </div>
            </div>
            <div className=' col-lg-6 col-md-6 col-sm-12 p-3'>
              <div className='mainpage001'>
                <img className='mainphoto' src={homedata.cardimg} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main