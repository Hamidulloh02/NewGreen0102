import React, { useEffect, useState } from "react";
import "./works.css";
import ish_json from "./ishlar.json";
import Typewriter from "typewriter-effect";
import AOS from 'aos'
export default function Works() {
  const [IshJson, setIshJson] = useState(ish_json);
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <div className="works__page">
      <div className="works__header"  data-aos="fade-up">
        <div className="works__opacity">  
        <div className="row typed__content ">
        <p className="  px-1 m-0">Bizning Saytimizga:</p> 
        <Typewriter
  options={{
    strings: ["Xush kelibsiz!" , "Qachon ketasiz!"],
    autoStart: true,
    loop: true,
  }}
/>
        </div>
      
        </div>
      </div>
      <div className="works__filter mt-5">
        <div className="container row m-auto d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse">
          <div className="works_right col-lg-9 col-md-12 col-sm-12  ">
            <div className="filter__section row">
              <div className="col-lg-3 col-md-6 col-sm-12" >
                <div className="mt-3 company_select filter__input__w border rounded-4">
                  <img src="./images/Works/Work.png" alt="" />
                  <input
                    className="w-75"
                    type="text"
                    placeholder="Ish, kompaniya"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 ">
                <div className="mt-3 country__input filter__input__w border rounded-4">
                   <img src="./images/Works/Location.png" alt="" />
                <select name="" id="">
                  <option value="">Yaponiya</option>
                  <option value="">O'zbekiston</option>
                </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 ">
               <div className="mt-3 magament__works filter__input__w border rounded-4">
               <img src="./images/Works/Document.png" alt="" />
                <select name="" id="">
                  <option value="">Hisobchi</option>
                  <option value="">Bug'alteriya</option>
                </select>
               </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
               <div className="mt-3 filter__btn filter__input__w rounded-4">
               <img src="./images/Works/Filter 2.png" alt="" />
                <p>Filter</p>
               </div>
              </div>
            </div>
            <h2 className="my-5">Mashhurlar</h2>

            {IshJson.map((arr) => {
              return (
                <>
                {arr.top ? (
                <div className="work__cards my-5">
                  <div className="work__card simple"  data-aos="fade-up">
                    <div className="work__card__container">
                      <div className="card__top row align-items-center py-2">
                        <div className="col-lg-2 col-md-6">
                          <img
                            className="w-75"
                            src={arr.rasm}
                            alt={arr.job_name}
                          />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <h6 className="m-0">{arr.job_name}</h6>
                          <i>Creative agency</i>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                          <img src="./images/Location.png" alt="" />
                          <b>{arr.country + ",  " + arr.shtat}</b>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                          <img
                            width="25px"
                            src="./images/Time Circle.png"
                            alt=""
                          />
                          <i className="p-1" c>
                            3 min ago
                          </i>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                          {arr.ish_turi.includes("Full time") && (
                            <div className="fulltime bg-success rounded-3 p-1 text-light text-center mt-1">
                              Full Time
                            </div>
                          )}
                          {arr.ish_turi.includes("Urgent") && (
                            <div className="urgent bg-warning rounded-3 p-1 text-light text-center mt-1">
                              {" "}
                              Urgent
                            </div>
                          )}
                          {arr.ish_turi.includes("Frilance") && (
                            <div className="frilance bg-primary rounded-3 p-1 text-light text-center mt-1">
                              Frilance
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="card__bottom row align-items-center py-2">
                        <div className="col-8">
                          <b className="fs-5">Exprience: </b>
                          <i>2-3 years</i>
                        </div>
                        <div className="col-4">
                          <h4> Apply now</h4>
                        </div>
                      </div>
                    </div>
                    <div className="card__corner">
                          <img src="./images/Works/Star.png" alt="" />
                        </div>
                  </div>
                      
                </div>
                        ) : (
                          <div className="work__cards my-5">
                          <div className="work__card gold"  data-aos="fade-up">
                            <div className="work__card__container">
                              <div className="card__top row align-items-center py-2">
                                <div className="col-lg-2 col-md-6">
                                  <img
                                    className="w-75"
                                    src={arr.rasm}
                                    alt={arr.job_name}
                                  />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                  <h6 className="m-0">{arr.job_name}</h6>
                                  <i>Creative agency</i>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12">
                                  <img src="./images/Location.png" alt="" />
                                  <b>{arr.country + ",  " + arr.shtat}</b>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                  <img
                                    width="25px"
                                    src="./images/Time Circle.png"
                                    alt=""
                                  />
                                  <i className="p-1" c>
                                    3 min ago
                                  </i>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                  {arr.ish_turi.includes("Full time") && (
                                    <div className="fulltime bg-success rounded-3 p-1 text-light text-center mt-1">
                                      Full Time
                                    </div>
                                  )}
                                  {arr.ish_turi.includes("Urgent") && (
                                    <div className="urgent bg-warning rounded-3 p-1 text-light text-center mt-1">
                                      {" "}
                                      Urgent
                                    </div>
                                  )}
                                  {arr.ish_turi.includes("Frilance") && (
                                    <div className="frilance bg-primary rounded-3 p-1 text-light text-center mt-1">
                                      Frilance
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="card__bottom row align-items-center py-2">
                                <div className="col-8">
                                  <b className="fs-5">Exprience: </b>
                                  <i>2-3 years</i>
                                </div>
                                <div className="col-4">
                                  <h4> Apply now</h4>
                                </div>
                              </div>
                            </div>
                            <div className="card__corner bg-warning">
                            <img src="./images/Works/gold_star.png" alt="" />
                          </div>
                          </div>
                         
                        </div>
                         
                        )}
                </>
              );
            })}
          </div>
          <div className="left p-3 col-lg-3 col-md-12 col-sm-12">
            <div class="accordion accordion-flush row" id="accordionFlushExample">
              <div class="col-lg-12 col-md-6 col-sm-12  accordion-item mb-3 ms-4">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6 col-sm-12  accordion-item mb-3 ms-4">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6 col-sm-12  accordion-item mb-3 ms-4">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="pages_content mb-4 w-50 m-auto d-flex flex-row justify-content-center align-items-center">
            <div className="page__box">
              <p className="p-0 m-0">{`<`}</p>
            </div>
            <div className="page__box page__box__active mx-2">
              <p className="p-0 m-0">1</p>
            </div>
            <div className="page__box mx-2">
              <p className="p-0 m-0">2</p>
            </div>
            <div className="page__box mx-2">
              <p className="p-0 m-0">3</p>
            </div>
            <div className="page__box">
              <p className="p-0 m-0">{`>`}</p>
            </div>
          </div>
      </div>
    </div>
  );
}
