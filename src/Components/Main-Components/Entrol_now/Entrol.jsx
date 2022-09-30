import React,{useState,useEffect,useContext} from 'react';
import './entrol.css'
import{ Context } from '../../../useContext__comp/Provider/AuthProvider'
import AOS from 'aos'
import { Link } from "react-router-dom"
const Entrol = (props) => {
    const [propstata, setpropsdata] = useState([])
    const{lang,setlang}=useContext(Context)
    useEffect(() => {
       
        {
            (lang=="uz"?setpropsdata(props.data[0]):setpropsdata(props.data[1]))
           
        }

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [lang])
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    return (
        <div>
             <div className="container">
                <div className="Entrol" style={{backgroundImage:  `url(${propstata.bg_img})`}}  >
                    <div className="entrol_bg " >
                        <div className="d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-center align-items-center ">
                            <div className="col-lg-6 col-md-12 col-sm-12  bg_entrol" data-aos="fade-right" >
                                <h1 className='text-white entrol_h1 mt-5'>{propstata.text1}</h1>
                                <h1 className='text-white entrol_h1'>{propstata.text2}</h1>
                                <Link to="/university_offer"><button className='entroll_button mt-5' onclick={topFunction()}>{propstata.button}</button></Link>  
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12  ' data-aos="fade-right">
                               <div className="card_1">
                                <img className='w-100' src={propstata.card_img} alt="senmon" />
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entrol;
