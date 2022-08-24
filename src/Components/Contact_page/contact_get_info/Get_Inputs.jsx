  import React, { useEffect,useState,useContext} from 'react'
import AOS from "aos"
import { Context } from '../../../useContext__comp/Provider/AuthProvider'
import GetIN_inputs from '../../Contact_page/contact_get_info/GetIN_inputs.json'
export default function Get_Inputs() {
  const [getInputdatajson, setGetInputdatajson] = useState([])
    const{lang,setlang}=useContext(Context)
    useEffect(()=>{

      {
        (lang == "uz" ?   setGetInputdatajson(GetIN_inputs[0])  :  setGetInputdatajson(GetIN_inputs[1]))
      }

     
     
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [lang])
    


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
          <h3 className='my-3'>{getInputdatajson.textCU}</h3>
          <p claccName='YourN'>{getInputdatajson.textYN}</p>
          <input type="text" placeholder={getInputdatajson.textYN1}/>
          <div className="row my-2 col6_2talik">
            <div className="col-6">
            <p>{getInputdatajson.tEA}</p>
            <input type="email" placeholder={getInputdatajson.tEA1}/>
            </div>
            <div className="col-6">
            <p>{getInputdatajson.tD}</p>
            <select className='' name="select"> 
            <option value="value1">{getInputdatajson.tUn}</option>
            <option value="value2" selected>{getInputdatajson.tW}</option>
            <option value="value3">{getInputdatajson.tS}</option>
          </select>
            </div>
          </div>
          <textarea name="" id="" cols="30" rows="5" placeholder={getInputdatajson.tM}></textarea>
          <input type="submit" className='SendM' value={getInputdatajson.sM}/>
        </div>
      </div>
    </div>
  </div>
  )
}
