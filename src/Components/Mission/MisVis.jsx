import React, { useEffect, useState, useContext } from "react";
import "./misVis.css";
import { Context } from "../../useContext__comp/Provider/AuthProvider";
import AOS from 'aos'
import Header_img from '../Main-Components/Header_Img/Header'
import headerjson from './Header.json'
import MissionJson from './MissionJson.json'
export default function MisVis() {
 
  const [missdataJson, setMissdataJson] = useState([])
  const { lang, setlang } = useContext(Context)
  useEffect(() => {
    setMissdataJson(MissionJson[0])

    {
      (lang == "uz" ?  setMissdataJson(MissionJson[0]) :  setMissdataJson(MissionJson[1]))
    }
  }, [lang])
  return (
    <div>

      <Header_img data={headerjson} />


      <div className="Img_text" style={{ backgroundImage: `url(${missdataJson.bgMV})` }}>
        <div className="container ">
          <div className="row ">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 my-4 d-flex align-items-center" data-aos="fade-up-right">
              <div className="mx-5">
                <h2 className="my-3 text-dark">{missdataJson.miss}</h2>
                <p>
                  {missdataJson.missText} <br />
                  {missdataJson.miT2} <br />
                  {missdataJson.miT3} <br />
                  {missdataJson.miT4} <br />
                  {missdataJson.miT5} <br />
                  {missdataJson.miT6}
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 my-4" data-aos="fade-up-left">
              <img width='100%' src="./images/CertiImg/iStock.png" alt="hacc" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3" data-aos="fade-up-right">
              <img width='100%' src="./images/CertiImg/zina_bola.png" alt="hacc" />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 d-flex align-items-center" data-aos="fade-up-left">
              <div className="mx-5">
                <h2 className="my-3 text-dark">{missdataJson.viss}</h2>
                <p>
                  {missdataJson.viText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
