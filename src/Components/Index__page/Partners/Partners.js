import React, {useEffect} from 'react'
import "./partner.css"
import AOS from "aos"
function Partners() {
    useEffect(()=>{
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, [])
    return (
        <div data-aos="fade-up">
           <div className='my-5 '>
           <h3 className='partnermenu mt-5 argn_top' >Partners
                <br />
                <img className='rectang-img' src='./images/Indexpage-img/Rectangle 2.png' />
            </h3>
            <p className='partnertext mx-auto'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
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