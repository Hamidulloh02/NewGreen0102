import React, { useEffect } from 'react';
import './senmon.css'
import { GrFormNextLink } from 'react-icons/gr'
import Get_Inputs from '../Contact_page/contact_get_info/Get_Inputs';
import AOS from "aos"
const Senmon = () => {
    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [])
    return (
        <div className='Senmon_uzbek'>
            <div className="header_senmon" data-aos="zoom-in">
                <h1 className='text-center text-white h1'>Study at the Top  </h1>
                <h1 className='text-center text-white'>Senmon in Japan</h1>
            </div>
            <div className="Senmon_japan" data-aos="fade-up">
                <div className="container">
                    <h1 className='text-center senmon_h1 '>Senmon in Japan</h1>
                    <p className='text-center mt-1 pb-5'>
                        Senmon-gakko (専門学校) are specialist schools that offer 2- <br /> year courses. The courses are typically vocational <br /> (hairdressing, fashion, caring, etc.); although there are <br /> schools that offer more generalist courses such as <br /> “business”.
                    </p>
                </div>
            </div>
            <div className="Year" >
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-right">
                            <div className="pencil_card">
                                <div className="pencil">
                                    <img className='w-50 pencil_img ' src="./images/Senmon/pencil-simple 1.png" alt="start" />
                                </div>
                                <h1 className='text-center ms-5 mt-4'>First Year</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="zoom-in">
                            <div className="pencil_card">
                                <div className="pencil">
                                    <img className='w-50 pencil_img ' src="./images/Senmon/pencil-simple-line 2.png" alt="start" />
                                </div>
                                <h1 className='text-center ms-5 mt-4'>Second Year</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-left">
                            <div className="pencil_card">
                                <div className="pencil">
                                    <img className='w-50 pencil_img ' src="./images/Senmon/pencil 3.png" alt="start" />
                                </div>
                                <h1 className='text-center ms-5 mt-4'>Final Year</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Profissional" 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            >
                <div className="container">
                    <div className="row justify-content-around ">
                        <div className="col-lg-4 col-md-6 col-sm-12  ">
                           <div className="pencil_card">
                           <div className="Institutions">
                                <h1 className='text-white text-center pt-5'>3,456</h1>
                                <h2 className='text-white text-center '>Institutions</h2>
                            </div>
                           </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 ">
                           <div className="pencil_card">
                           <div className="Institutions">
                                <h1 className='text-white text-center pt-5'>150 +</h1>
                                <h2 className='text-white text-center '>Professions</h2>
                            </div>
                           </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12  ">
                            <div className="pencil_card">
                            <div className="Institutions">
                                <h1 className='text-white text-center pt-5'>300 +</h1>
                                <h2 className='text-white text-center '>State Schools</h2>
                            </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="Process"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            >
                <div className="container">
                    <h1 className='text-center mb-5'>Process of Enrollment</h1>
                    <div className="row justify-content-around">
                        <div className="col-lg-4 col-md-6 col-sm-12  ">
                            <div className="row process_card pb-5  justify-content-around">
                                <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                                    <h2>01</h2>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 text-center">
                                    <h5>Research  <GrFormNextLink className='fs-2' /></h5>
                                    <p>
                                        There are many variations of
                                        Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="row process_card pb-5 ">
                                <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                                    <h2>02</h2>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 text-center ">
                                    <h5>Strategy  <GrFormNextLink className='fs-2' /></h5>
                                    <p>
                                        There are many variations of
                                        Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="row process_card pb-5 ">
                                <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                                    <h2>03</h2>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 text-center">
                                    <h5>The Result  <GrFormNextLink className='fs-2' /></h5>
                                    <p>
                                        There are many variations of
                                        Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="Entrol" data-aos="flip-up">
                    <div className="entrol_bg">
                        <div className="d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-center align-items-center ">
                            <div className="col-lg-6 col-md-12 col-sm-12  margin_entroll">
                                <h1 className='text-white mt-5'>Want To Study</h1>
                                <h1 className='text-white'>With Us</h1>
                                <button className='entroll_button mt-5'>ENTROLL NOW</button>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 '>
                                <div className='entrol_img'>
                                    <img className='w-100' src="./images/Senmon/senmonS 1 (4).png" alt="Senmon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Get_Inputs/>
        </div>
    );
}

export default Senmon;
