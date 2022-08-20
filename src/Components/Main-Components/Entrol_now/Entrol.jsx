import React,{useState,useEffect} from 'react';
import './entrol.css'
import AOS from 'aos'
const Entrol = (props) => {
    const [propstata, setpropsdata] = useState([])
    useEffect(() => {
        setpropsdata(props.data[0])

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [])

   
    return (
        <div>
             <div className="container">
                <div className="Entrol" style={{backgroundImage:  `url(${propstata.bg_img})`}}  >
                    <div className="entrol_bg " >
                        <div className="d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-center align-items-center ">
                            <div className="col-lg-6 col-md-12 col-sm-12  bg_entrol" data-aos="fade-right" >
                                <h1 className='text-white entrol_h1 mt-5'>{propstata.text1}</h1>
                                <h1 className='text-white entrol_h1'>{propstata.text2}</h1>
                                <button className='entroll_button mt-5'>{propstata.button}</button>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12  ' data-aos="fade-left">
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
