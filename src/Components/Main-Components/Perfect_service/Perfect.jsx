import React, { useState, useEffect, useContext } from 'react';
import './perfect.css'
import { Context } from '../../../useContext__comp/Provider/AuthProvider';
import AOS from 'aos'
const Perfect = (props) => {
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
        <div className="Perfect_servis " style={{ backgroundImage: `url(${propstata.bg_img})` }}>
            <div className="container">
                <div className="row justify-content-around text-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5 " data-aos="fade-right">
                        <div className="perfect_card">
                            <h1>{propstata.title1}</h1>
                            <p>
                                {propstata.text1}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5  " data-aos="flip-up">
                        <div className="perfect_card">
                            <h1>{propstata.title2}</h1>
                            <p>
                                {propstata.text2}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5" data-aos="fade-up">
                        <div className="perfect_card">
                            <h1>{propstata.title3}</h1>
                            <p>
                                {propstata.text3}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfect;
