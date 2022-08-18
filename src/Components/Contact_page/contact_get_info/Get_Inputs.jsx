import React, { useEffect } from 'react'
import AOS from "aos"

export default function Get_Inputs() {
    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [])
  return (
    <div className="container contact__section">
    <div className="row">
      <div className="col-6 contact__section__left" data-aos="fade-right">
        <div className="contact__section__card border">
          <div className="rasmcha"></div>
          <div className="contact__page__left__setInfo"></div>
        </div>
      </div>
      <div className="col-6 contact__section__right d-flex flex-column justify-content-center align-items-center"  data-aos="fade-left">
        <div className="contact__section__getInfo text-center">
          <h3>Let's talk</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eius error cupiditate quae illum dolorum similique, nisi nostrum odit natus ad amet.</p>
          <input type="text" placeholder="Your name*"/>
          <input type="email" placeholder="Example@gmail.com"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <input type="submit" value="Send Message"/>
        </div>
      </div>
    </div>
  </div>
  )
}
