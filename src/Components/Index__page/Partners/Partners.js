import React, { useEffect, useContext, useState } from 'react'
import "./partner.css"
import { Context } from '../../../useContext__comp/Provider/AuthProvider'
import AOS from "aos"
//import Json
import partnerjson from "./partner.json"
function Partners() {
    const [partnerdata, setpartnerdata] = useState([])
    const { lang, setlang } = useContext(Context)
    useEffect(() => {

        {
            (lang == "uz" ? setpartnerdata(partnerjson[0]) : setpartnerdata(partnerjson[1]))
        }

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [lang])
    return (
        <div data-aos="fade-up">
            <div className='my-5 '>
                <h3 className='partnermenu mt-5 argn_top' >{partnerdata.Title}
                    <br />
                    <img className='rectang-img' src='./images/Indexpage-img/Rectangle 2.png' />
                </h3>
                <p className='partnertext mx-auto'>
                    {partnerdata.Text}
                </p>
            </div>
            <div class="swiffy-slider slider-item-show4 slider-nav-outside slider-nav-dark slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart slider-nav-autoplay slider-nav-autopause slider-item-ratio slider-item-ratio-contain slider-item-ratio-32x9 bg-white  py-3 py-lg-4" data-slider-nav-autoplay-interval="2000">
                <div class="slider-container">
                    <div><img src="./images/Indexpage-img/slider 1.png" alt="..." /></div>
                    <div><img src="./images/Indexpage-img/slider 2.png" loading="lazy" alt="..." /></div>
                    <div><img src="./images/Indexpage-img/slider 3.png" loading="lazy" alt="..." /></div>
                    <div><img src="./images/Indexpage-img/slider 4.png" loading="lazy" alt="..." /></div>
                    <div><img src="./images/Indexpage-img/slider 5.png" loading="lazy" alt="..." /></div>
                    <div><img src="./images/Indexpage-img/slider 2.png" loading="lazy" alt="..." /></div>
                    <div><img src="./images/Indexpage-img/slider 5.png" loading="lazy" alt="..." /></div>
                    <div><img src="./images/Indexpage-img/slider 2.png" loading="lazy" alt="..." /></div>
                    <div><img src="./images/Indexpage-img/slider 5.png" loading="lazy" alt="..." /></div>
                    <div><img src="./images/Indexpage-img/slider 2.png" loading="lazy" alt="..." /></div>
                </div>

                <button type="button" class="slider-nav" aria-label="Go left"></button>
                <button type="button" class="slider-nav slider-nav-next" aria-label="Go right"></button>

            </div>
        </div>
    )
}

export default Partners