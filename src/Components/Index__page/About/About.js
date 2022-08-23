import React , {useEffect, useState,useContext} from 'react'
import {Context} from '../../../useContext__comp/Provider/AuthProvider'
import "./about.css"
import AOS  from 'aos'
//import Json
import aboutjson from "./about.json"
function About() {
    const [aboutdata,setaboutdata] = useState([])
    const {lang,setlang}=useContext(Context)
    useEffect(()=>{
        {
            (lang=="uz"? setaboutdata(aboutjson[0]): setaboutdata(aboutjson[1]))
        }

        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, [lang])
    return (
        <div>
            <div className='aboutbody' style={{ backgroundImage: `url(${aboutdata.Bg_img})`}}>
                <h2 className='text-center margn_top'>{aboutdata.Title}
                <br/>
                <img className='bottom_img' src='./images/Indexpage-img/Rectangle 2.png'/>
                </h2>
                
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-6 col-md-6 col-sm-12 p-4' data-aos = "fade-up-right">
                            <div className='about_dlex'>
                                <img src='./images/Indexpage-img/about-img.png' /> 
                            </div> 
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12' data-aos = "fade-left">
                            <div className='index_page_about_text'>
                                <p className='mt-3 about_tit'>{aboutdata.Text1} <p className='about_tit'>{aboutdata.Text2}</p> </p>
                                <p>
                                    {aboutdata.Text3}

                                </p>
                                <p>
                                    {aboutdata.Text4}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About