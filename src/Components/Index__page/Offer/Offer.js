import React , {useEffect, useState,useContext} from "react";
import { BsArrowRightShort } from "react-icons/bs";
import "./offer.css";
import {Context} from '../../../useContext__comp/Provider/AuthProvider'
import AOS from "aos";
// import Json
import offerjson from "./offer.json"
function Offer() {
  const [offerdata,setofferdata] = useState([])
  const{lang,setlang}=useContext(Context)
  useEffect(()=>{

    {
      (lang == "uz" ?  setofferdata(offerjson[0]) :  setofferdata(offerjson[1]))
    }

   
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, [lang]);

  return (
    <>
      <div className="offerbody offerbody1" data-aos="fade-up">
       <div className="my-5">
       <h3 className="offermenu mt-5" >
          {offerdata.title}
          <br />
          <img
            className="rectang-img"
            src="./images/Indexpage-img/Rectangle 2.png"
          />
        </h3>
        <div>
          <p className="offertext mx-auto">
            {offerdata.text}
          </p>
        </div>
       </div>
        <div className="container">
          <div className="row maincard">
            <div className="col-lg-4 col-md-6 col-sm-12 p-4">
              <div className="card">
                <div className="offer_img_div">
                  <img
                    className="cardimg"
                    src="./images/Indexpage-img/card 1.png"
                  />
                </div>
                <h5 className="cardtext">{offerdata.card1text}</h5>
                <p className="offer_more">
                  {offerdata.more} <BsArrowRightShort />
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-4">
              <div className="card">
                <div className="offer_img_div">
                  <img
                    className="cardimg"
                    src="./images/Indexpage-img/card 2.png"
                  />
                </div>
                <h5 className="cardtext">{offerdata.card2text}</h5>
                <p className="offer_more">
                  {offerdata.more} <BsArrowRightShort />
                </p>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12 p-4">
              <div className="card">
                <div className="offer_img_div">
                  <img
                    className="cardimg"
                    src="./images/Indexpage-img/card 3.png"
                  />
                </div>
                <h5 className="cardtext">{offerdata.card3text}</h5>
                <p className="offer_more">
                  {offerdata.more} <BsArrowRightShort />
                </p>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12 p-4">
              <div className="card">
                <div className="offer_img_div">
                  <img
                    className="cardimg"
                    src="./images/Indexpage-img/card 4.png"
                  />
                </div>
                <h5 className="cardtext">{offerdata.card4text} </h5>
                <p className="offer_more">
                  {offerdata.more} <BsArrowRightShort />
                </p>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-sm-12 p-4">
              <div className="card">
                <div className="offer_img_div">
                  <img
                    className="cardimg"
                    src="./images/Indexpage-img/card 5.png"
                  />
                </div>
                <h5 className="cardtext">{offerdata.card5text}</h5>
                <p className="offer_more">
                  {offerdata.more} <BsArrowRightShort />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="offercard mt-4"></div>
      </div>
    </>
  );
}

export default Offer;
