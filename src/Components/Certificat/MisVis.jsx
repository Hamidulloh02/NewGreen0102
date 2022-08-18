import React , {useEffect} from "react";
import "../Certificat/misVis.css";
import AOS from 'aos'
export default function MisVis() {
  useEffect(()=>{
    AOS.init()
  } ,  [])
  return (
    <div>
      <div className="Mis_vis mx-0" data-aos="zoom-in">
        <h1>
          Mission <br /> <span className="spanMisvis">&</span> <br /> Vision
        </h1>
      </div>

      <div className="Img_text">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 d-flex align-items-center" data-aos="fade-up-right">
              <div className="mx-5">
              <h2 className="my-3">Mission</h2>
              <p>
                1. To help with the way of life in Japan
                <br /> 2. Assistance with tax
                and pension issues when returning from Japan.
                <br /> 3. Learning
                Japanese online and offline
                <br /> 4. Support when arriving and leaving
                Japan.
                <br /> 5. Help to find a job and educational institution in
                Japan.
                <br /> 6. Business seminars (business meetings in Japan and
                Uzbekistan, studying the Japanese and Uzbek market for
                entrepreneurs)
              </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3" data-aos="fade-up-left">
          <img width='100%' src="./images/CertiImg/iStock.png" alt="hacc" />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3" data-aos="fade-up-right">
          <img width='100%' src="./images/CertiImg/zina_bola.png" alt="hacc" />
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3 d-flex align-items-center" data-aos="fade-up-left">
              <div className="mx-5">
              <h2 className="my-3">Vision</h2>
              <p>
                
                To organize a league of Uzbek bismen in Japan and establish mutual cooperation between them and gather them together at least once a year.
                To unite Japanese businessmen in Uzbekistan and organize a meeting between them at least once a year.
                Organization of business tours composed only of businessmen.
                Green box's future plans.
                Establishment of Uzbekistan branch of Green Box
                Connecting Imabari with a region or district of Uzbekistan and organizing a sister cities project.
                Establishing cooperation between Japanese and Uzbek business representatives through golf.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
