import React, { useEffect } from "react";
import "./ContactPage.css";
import contact__info from './contact__info.json'
import {HiLocationMarker} from 'react-icons/hi'
import {FiPhoneCall} from 'react-icons/fi'
import {HiMail} from 'react-icons/hi'
import Get_Inputs from "./contact_get_info/Get_Inputs";
import AOS from 'aos'
export default function Contact_page() {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <div className="contact__page">
      <div className="contact__header h-auto" data-aos="zoom-in">
        <div className="contact__header__text">
          <p className="text-center text-success fs-3 pt-4">Contact Us</p>
          <h1 className="text-center py-2">We’re here to help!</h1>
        </div>
        <div className="container">
        <div className="row mt-5 pt-3">
          {
            contact__info.map((vl , index)=>{
              return(
                <div className="col-lg-4" key={index}>
                  <div className="card border p-5 contact__header__card">
                    <h4 className="text-center py-2">{vl.name}</h4>
                    <p className="d-flex"><HiLocationMarker className="fs-2 me-2"/><span class="contact__adress">{vl.adress}</span></p>
                    <p className="d-flex"><FiPhoneCall className="fs-4 me-2"/>{vl.telephone}</p>
                    <p><HiMail className="fs-4"/> {vl.email_adress}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
      </div>
     <Get_Inputs/>

        <div className='container my-3' data-aos="flip-up"  >
        <iframe
                    class="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.8293859990536!2d69.24700580959565!3d41.356062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c8dae4b0503%3A0xe6ed62f21100f334!2z0JzQkNCT0JDQl9CY0J0g0KHQktCV0KLQntCU0JjQntCU0J3Qq9CZINCc0JjQoA!5e0!3m2!1sru!2s!4v1657949955673!5m2!1sru!2s"
                >
                </iframe>
            </div>
    </div>
  );
}
