import React,{useEffect} from 'react'
import "./footer.css"
import AOS from 'aos'
function Footer() {
    useEffect(() => {
        

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, []);
    return (
        <>
            <div className='footerbody' data-aos="flip-down">

                <div className='backfooter' >
                    <div className='container'>
                        <div className='row footermenu'>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                                <div className='logo'>
                                    <img className='me-3' src='./images/Footer-img/greenbox_logo.png' />
                                </div>
                                <p className='footertext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and  specimen book. </p>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                                <div className="row mt-4">
                                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                        <ul>
                                            <li className='footertitle py-3'>Company</li>
                                            <li>About</li>
                                            <li>Contact</li>
                                            <li>Certificate</li>
                                            <li>Mission & Vision</li>
                                        </ul>
                                    </div>
                                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                        <ul>
                                            <li className=' footertitle py-3'>Services</li>
                                            <li>Legal advices</li>
                                            <li>Visa</li>
                                            <li>Startin Business</li>
                                            <li>Japan</li>
                                        </ul>
                                    </div>
                                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                        <ul>
                                            <li className=' footertitle py-3'>Help</li>
                                            <li>Help center</li>
                                            <li>Contact support</li>
                                            <li>Instruction</li>
                                            <li>How it works</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sofft'>
                <p className='mt-1'>Powered by @soff_hub</p>
            </div>
        </>

    )
}

export default Footer