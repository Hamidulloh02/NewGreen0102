import React, { useEffect, useState, useContext } from 'react';
import './strategic.css'
import { Context } from '../../../useContext__comp/Provider/AuthProvider';
import AOS from 'aos'
const Strategic = (props) => {
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
        <div className="Strategic" style={{ backgroundImage: `url(${propstata.bg_img})` }}>
            <div className="container">
                <div className="row flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 grown" data-aos="zoom-in-right">
                        <h1>{propstata.title}</h1>
                        <p className='mb-5'>
                            {propstata.text1} <br /> <br />
                            {propstata.text2}
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 card_img mb-5" data-aos="zoom-in-left">
                        <img src={propstata.card_img} alt="legal" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Strategic;
