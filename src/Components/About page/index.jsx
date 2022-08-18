import React, { useEffect } from "react";
import "./about_page.css";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiWaterDrop } from "react-icons/gi";
import { BsSun } from "react-icons/bs";
import AboutJson from "./About_company.json";
import Carusel from "./about_carusel";
import AOS from 'aos'
export default function About_page() {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <div className="About__page">
      <div className="about_header">
        <Carusel className="about__carusel"/>
        <div className="about__opacity"></div>
      </div>
      <div className="about__works">
        <div className="about__title "  data-aos="zoom-out">
          <h1 className="text-center py-5">
            <span className="text-success works__count">3000+</span>
            <br /> PEOPLE WORKING WITH US
          </h1>
          <p className="text-center text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, vel.
            Est exercitationem culpa, placeat error cupiditate consequuntur
            optio magni <br /> repudiandae excepturi odit vitae unde eaque,
            maxime totam dolore delectus.
          </p>
        </div>

        <div className="container mt-5 py-5">
          <div className="about__cards row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="about__card m-auto my-5" data-aos="zoom-out">
                <BsFillExclamationTriangleFill className="about__card__icons" />
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus eaque placeat <br />
                </p>
                <div className="card__content"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="about__card m-auto my-5" data-aos="zoom-in">
                <AiOutlineAreaChart className="about__card__icons" />
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus eaque placeat <br />
                </p>
                <div className="card__content"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="about__card m-auto my-5" data-aos="zoom-in">
                <GiWaterDrop className="about__card__icons" />
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus eaque placeat <br />{" "}
                </p>
                <div className="card__content"></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="about__card m-auto my-5  "data-aos="zoom-out">
                <BsSun className="about__card__icons" />
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus eaque placeat <br />{" "}
                </p>
                <div className="card__content"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="company__info">
          {AboutJson.map((vl, index) => {
            return (
              <>
                {index % 2 === 0 ? (
                  <div className="info__card d-flex  flex-lg-row flex-md-column flex-sm-column justify-content-center align-items-center h-auto" key={index}>
                    <div className="px-4 w-75 h-auto" data-aos="fade-right">
                      <div className="about__info__card shadow">
                      <img src={vl.img} alt={vl.name} />
                      </div>
                    </div>
                    <div className="px-4 w-75 h-auto" data-aos="fade-left">
                      <div className="about__info__card">
                      <h1>{vl.name}</h1>
                      <p className="text-muted">{vl.title}</p>
                      </div>
                      <div>
                        <button>Batafsil</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="info__card d-flex  flex-lg-row flex-md-column-reverse flex-sm-column-reverse justify-content-center align-items-center h-auto" key={index}>
                  <div className="px-4 w-75 h-auto" data-aos="fade-right">
                    <div className="about__info__card ">
                    <h1>{vl.name}</h1>
                    <p className="text-muted">{vl.title}</p>
                    </div>
                    <div>
                      <button>Batafsil</button>
                    </div>
                  </div>
                  <div className="px-4 w-75 h-auto" data-aos="fade-left">
                    <div className="about__info__card shadow">
                    <img src={vl.img} alt={vl.name} />
                    </div>
                  </div>
                </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
