import React, { useState, useEffect, useContext } from 'react';
import './process.css'
import { Context } from '../../../useContext__comp/Provider/AuthProvider';
import { GrFormNextLink } from 'react-icons/gr'
import AOS from 'aos'
const Process = (props) => {
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
        <div className='Process' style={{ backgroundImage: `url(${propstata.bg_img})` }}>
            <div className="container">
                <h1 className='text-center mb-5'>{propstata.h1_title}</h1>
                <div className="row justify-content-around padding">
                    <div className="col-lg-4 col-md-6 col-sm-12 process_card " data-aos="zoom-in-right">
                        <div className="row   justify-content-around">
                            <div className="col-lg-4 col-md-4 mb-3  text-center">
                                <h2>{propstata.number1}</h2>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 text-center" >
                                <h5> {propstata.title1} <img className='img_strelka' src="./images/process_of/strelka.png" alt="" /> </h5>
                                <p className='mt-4'>
                                    {propstata.text2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 process_card " data-aos="zoom-out-up">
                        <div className="row   ">
                            <div className="col-lg-4 col-md-4 col-sm-12 mb-3 text-center">
                                <h2>{propstata.number2}</h2>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12  text-center">
                                <h5> {propstata.title2} <img className='img_strelka' src="./images/process_of/strelka.png" alt="" /> </h5>
                                <p className='mt-4'>
                                    {propstata.text2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12  process_card" data-aos="zoom-in-right">
                        <div className="row ">
                            <div className="col-lg-4 col-md-4 col-sm-12 text-center mb-3">
                                <h2>{propstata.number3}</h2>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12   text-center">
                                <h5> {propstata.title3} <img className='img_strelka' src="./images/process_of/strelka.png" alt="" /> </h5>
                                <p className='mt-4'>
                                    {propstata.text3}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process;
