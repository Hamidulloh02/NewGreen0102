import React , {useEffect} from "react";
import { BsArrowRightShort } from "react-icons/bs";
import "./offer.css";
import AOS from "aos";

function Offer() {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div className="offerbody offerbody1" data-aos="fade-up">
       <div className="my-5">
       <h3 className="offermenu mt-5" >
          What we offer
          <br />
          <img
            className="rectang-img"
            src="./images/Indexpage-img/Rectangle 2.png"
          />
        </h3>
        <div>
          <p className="offertext mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap
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
                <h5 className="cardtext">Work in japan</h5>
                <p className="offer_more">
                  More <BsArrowRightShort />
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
                <h5 className="cardtext">Study in japan</h5>
                <p className="offer_more">
                  More <BsArrowRightShort />
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
                <h5 className="cardtext">Visa services</h5>
                <p className="offer_more">
                  More <BsArrowRightShort />
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
                <h5 className="cardtext">All legal services</h5>
                <p className="offer_more">
                  More <BsArrowRightShort />
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
                <h5 className="cardtext">Living Japan-Apartments for Rent</h5>
                <p className="offer_more">
                  More <BsArrowRightShort />
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
