import React, { useEffect, useState, useContext } from 'react';
import './status.css'
import { Context } from '../../../useContext__comp/Provider/AuthProvider';
import AOS from 'aos'
const Status = (props) => {
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
        <div className="Profissional">
            <div className="container">
                <div className="row justify-content-around ">
                    <div className="col-lg-4 col-md-6 col-sm-12  " data-aos="zoom-in-right">
                        <div className="pencil_card">
                            <div className="Institutions">
                                <h1 className='text-white text-center pt-4'>{propstata.card1}</h1>
                                <h2 className='text-white text-center '>{propstata.card1_text}</h2>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 " data-aos="zoom-out-up">
                        <div className="pencil_card">
                            <div className="Institutions">
                                <h1 className='text-white text-center pt-4'>{propstata.card2}</h1>
                                <h2 className='text-white text-center '>{propstata.card2_text}</h2>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12  " data-aos="zoom-in-left">
                        <div className="pencil_card">
                            <div className="Institutions">
                                <h1 className='text-white text-center pt-4'>{propstata.card3}</h1>
                                <h2 className='text-white text-center '>
                                    {propstata.card3_text}
                                </h2>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Status;
