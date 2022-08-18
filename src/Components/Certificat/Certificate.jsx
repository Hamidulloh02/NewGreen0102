import React , {useEffect} from "react";
import "../Certificat/certificat.css";
import AOS from "aos"

export default function Certificate() {
  useEffect(()=>{
    AOS.init()
  } ,  [])
  return (
    <div>
      <div className="imgChooseFrom mx-0" data-aos = "zoom-in">
        <h1 className="textChooseF">
          Choose From Top <br /> Universities in Japan
        </h1>
      </div>

      <div className="textBg mx-0">
        <div className="container" data-aos="fade-up">
          <h1 className="textOURCERT my-3">Our Certificates</h1>
          <p className="textOURP">
            The company seal impression certificate is a document publicly
            certifying the company seal that has been registered. This
            certificate is used to confirm whether or not company seals placed
            on applications, filings, contracts, etc., have been placed there
            with legitimate authorization from the company; the certificate may
            be obtained from the Legal Affairs Bureau after completion of
            establishment registration. The company seal as well as the names of
            the persons authorized to use the seal must be applied for
            registration with the Legal Affairs Bureau when applying for
            establishment registration. The representatives of the branch
            office/subsidiary company are the only parties authorized to use the
            company seal, and their personal seal registration certificates or
            signature certificates must be presented when registering the
            company seal.In the event of changes to the registered information
            or the company seal, the prescribed modification procedures must be
            completed promptly. Applications for registration of changes to
            registered information must be submitted to the Legal Affairs Bureau
            within two weeks of the changes for subsidiary companies, and within
            three weeks of the changes for branch offices.{" "}
          </p>
        </div>
      </div>

      <div className="container Certificate_IMG">
        <div className="row">
          <div data-aos="fade-up-right" className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3">
            <img
              width="100%"
              height="750"
              src="./images/CertiImg/HACC.png"
              alt="hacc"
            />
          </div>
          <div data-aos="fade-up-left" className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3">
            <img
              width="100%"
              height="750"
              src="./images/CertiImg/Shreyash.png"
              alt="hacc"
            />
          </div>
          <div data-aos="fade-up-right" className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3">
            <img
              height="350"
              width="100%"
              src="./images/CertiImg/2016_2017.png"
              alt="hacc"
            />
          </div>
          <div data-aos="fade-up-left" className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-3">
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
