import React, {useEffect,useState} from 'react';
import './foundation.css'
import AOS from 'aos'
const Faundation = (props) => {
    const [propstata, setpropsdata] = useState([])
useEffect(() => {
 setpropsdata(props.data[0])

 AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
},[])
    return (
        <div className='Foundation'>
            <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-3 col-md-6 col-sm-12 foundation_card " data-aos="fade-up-right">
                            <div className="pencil_card">
                                <div className="pencil">
                                    <img className='w-50 pencil_img  ' src={propstata.img1} alt={propstata.alt1} />
                                </div>
                                <h1 className=' h1  mt-4'>{propstata.text1}</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 foundation_card" data-aos="fade-up">
                            <div className="pencil_card">
                                <div className="pencil">
                                    <img className='w-50 pencil_img ' src={propstata.img2} alt={propstata.alt2} />
                                </div>
                                <h1 className='  h1   mt-4'>{propstata.text2} </h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 foundation_card "  data-aos="fade-up">
                            <div className="pencil_card">
                                <div className="pencil">
                                    <img className='w-50 pencil_img ' src={propstata.img3} alt={propstata.alt3} />
                                </div>
                                <h1 className='text-center   h1 mt-4'>{propstata.text3}</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 foundation_card " data-aos="fade-up-left">
                            <div className="pencil_card">
                                <div className="pencil">
                                    <img className='w-50 pencil_img  ' src={propstata.img4} alt={propstata.alt4} />
                                </div>
                                <h1 className='text-center  h1  ms-3 mt-4'>{propstata.text4}</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Faundation;
