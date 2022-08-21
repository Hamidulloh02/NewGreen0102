import React , {useEffect} from "react";
import "../Certificat/certificat.css";
import AOS from "aos"
import Header from '../Main-Components/Header_Img/Header';
import Text from '../Main-Components/Text_content/Text'
import text from './Text.json'
import header from './Header.json'
export default function Certificate() {
  useEffect(()=>{
    AOS.init()
  } ,  [])
  return (
    <div>
      <Header data={header}/>
      <Text data={text}/>
      <div className="container Certificate_IMG my-5">
        <div className="row">
          <div data-aos="fade-up-right" className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-4 px-3">
            <img
              width="100%"
              height="750"
              src="./images/CertiImg/HACC.png"
              alt="hacc"
            />
          </div>
          <div data-aos="fade-up-left" className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-4 px-3">
            <img
              width="100%"
              height="750"
              src="./images/CertiImg/Shreyash.png"
              alt="hacc"
            />
          </div>
          <div data-aos="fade-up-right" className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-4 px-3">
            <img
              height="350"
              width="100%"
              src="./images/CertiImg/2016_2017.png"
              alt="hacc"
            />
          </div>
          <div data-aos="fade-up-left" className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-4 px-3">
            <img
              height="350"
              width="100%"
              src="./images/CertiImg/Registration.png"
              alt="hacc"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
