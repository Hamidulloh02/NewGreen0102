import React , {useEffect} from 'react'
import "./about.css"
import AOS  from 'aos'

function About() {
    useEffect(()=>{
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, [])
    return (
        <div>
            <div className='aboutbody'>
                <h2 className='text-center margn_top'>About Us
                <br/>
                <img className='bottom_img' src='./images/Indexpage-img/Rectangle 2.png'/>
                </h2>
                
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-6 col-md-6 col-sm-12' data-aos = "fade-up-right">
                            <div className='about_dlex'>
                                <img src='./images/Indexpage-img/about-img.png' /> 
                            </div> 
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12' data-aos = "fade-left">
                            <div>
                                <h3 className='mt-3'>About Us Lorem ipsum dolor sit <h3>amet,</h3> </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisavida facilisi posuere leo nec nisl. Varius viverra tortor ut mauris. Nunc molestie nibh blandit fringilla pulvinar pharetra dictumst.

                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim aliquam, proin sed pulvinar bibendum. Aliquet gravida facilisi posuere leo nec nisl. Varius viverra tortor ut mauris. Nunc molestie nibh blandit fringilla pulvinar pharetra dictumst.

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