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
      <div className="col-6 contact__section__right"  data-aos="fade-left">
        <div className="contact__section__getInfo">
          <h3 className='my-3'>Contact Us</h3>
          <p claccName='YourN'>Your name *</p>
          <input type="text" placeholder="Your name"/>
          <div className="row my-2 col6_2talik">
            <div className="col-6">
            <p>Email address *</p>
            <input type="email" placeholder="Example@gmail.com"/>
            </div>
            <div className="col-6">
            <p>Department *</p>
            <select className='px-2' name="select"> 
            <option value="value1">University</option>
            <option value="value2" selected>Work</option>
            <option value="value3">Study</option>
          </select>
            </div>
          </div>
          <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
          <input type="submit" className='SendM' value="Send Message"/>
        </div>
      </div>
    </div>
  </div>
  )
}
