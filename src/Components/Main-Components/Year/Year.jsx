import React, { useEffect, useState, useContext } from 'react';
import './year.css'
import { Context } from '../../../useContext__comp/Provider/AuthProvider';
import AOS from 'aos'
const Year = (props) => {
    const [propstata, setpropsdata] = useState([])
    const { lang, setlang } = useContext(Context)
    useEffect(() => {

        {
            (lang == "uz" ? setpropsdata(props.data[0]) : setpropsdata(props.data[1]))
        }

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [lang])
    return (
        <div className="Year">
            <div className="container">
                <div className="row justify-content-around  d-flex justify-content-center card_center">
                    <div className="col-lg-4 col-md-6 col-sm-12 " data-aos="zoom-out-right">
                        <div className="pencil_card">
                            <div className="pencil">
                                <img className='w-50 pencil_img ' src={propstata.img1} alt={propstata.img_alt} />
                            </div>
                            <h1 className='  mt-4'>{propstata.year1}</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12" data-aos="zoom-out">
                        <div className="pencil_card">
                            <div className="pencil">
                                <img className='w-50 pencil_img ' src={propstata.img2} alt={propstata.img_alt} />
                            </div>
                            <h1 className=' mt-4'>{propstata.year2}</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12  " data-aos="zoom-out-right">
                        <div className="pencil_card">
                            <div className="pencil">
                                <img className='w-50 pencil_img ' src={propstata.img3} alt={propstata.img_alt} />
                            </div>
                            <h1 className='  mt-4'>{propstata.year3}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Year;
