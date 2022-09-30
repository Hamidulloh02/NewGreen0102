import React,{useState,useEffect, useContext} from 'react'
import { Context } from '../../../useContext__comp/Provider/AuthProvider'
//import CSS
import "./univer_card.css"

function Univer_card(props) {
    const [propsdata,setpropsdata] = useState([])
    const{lang,setlang}=useContext(Context)
    useEffect(() => {
        setpropsdata(props.data[0])
       setpropsdata(props.data[0]) 
      {
        (lang == "uz" ? setpropsdata(props.data[0]) : setpropsdata(props.data[1]))
      }
    }, [lang])
  return (
    <div>
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5">
                     <div className="div__full_img">
                        <div className='div__img'>
                            <div className="univer__logo">
                                <img src={propsdata.logo} alt="logo-img" />
                            </div>
                            <img className='w-100' src={propsdata.img} alt="card-img" /> 
                        </div>
 
                     </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    {/* <div className="univer__main__text"> */}
                        <p className='univer__title'>{propsdata.title}</p>
                        <div className="main__text">
                            <p className='univer__text'>{propsdata.text}</p>
                        </div>
                        
                        <div className="univer_btn_div">
                            <button className='univer__btn__learn'>Learn More</button>
                        </div>                        
                    {/* </div> */}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Univer_card