import React from 'react';
import './special.css'
import { GrFormNextLink } from 'react-icons/gr'

const Special = () => {
    return (
        <div className='Special_viza'>
        <div className="header_special_viza">
            <h1 className='text-center text-white h1'>Special Viza  </h1>
        </div>
        <div className="spacial_viza_uzbek">
            <div className="container">
                <h1 className='text-center senmon_h1 '>Special Visa</h1>
                <p className='text-center mt-1 pb-5'>
                The Tokutei gino (tèdìngjìnéng) visa type was established by the Japanese <br /> government in conjunction with the trainee visa project. Currently, this visa includes <br /> 14 fields. And in turn, this is also divided into two types: tèdìngjìnéng1hào and <br /> tèdìngjìnéng2hào. This type of visa allows you to work in Japan for 6 months, <br /> extending from 1 year to 5 years after passing the proficiency test and the Japanese <br /> language test in these 14 fields. There are types of Tokutei gino that change to 2hào type 2hào <br /> after 5 years, and there are also types that are included in 2hào type from <br /> the beginning. This is the construction, shipbuilding and marine industry. 
                </p>
            </div>
        </div>
       
        <div className="Profissional">
            <div className="container">
                <div className="row justify-content-around ">
                    <div className="col-lg-4 col-md-6 col-sm-12   pb-5">
                        <div className="pencil_card">
                            <div className="Institutions">
                                <h1 className='text-white text-center pt-5'>3,000 + </h1>
                                <h2 className='text-white text-center '>Job Offers</h2>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12  pb-5">
                        <div className="pencil_card">
                            <div className="Institutions">
                                <h1 className='text-white text-center pt-5'>1,5 + </h1>
                                <h2 className='text-white text-center '>International Labors</h2>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12  pb-5 ">
                        <div className="pencil_card">
                            <div className="Institutions">
                                <h1 className='text-white text-center pt-5'>3,700 + </h1>
                                <h2 className='text-white text-center '>
                                Compamies
                                </h2>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div className="Process_work_viza">
            <div className="container">
                <h1 className='text-center mb-5'>Process of Enrollment</h1>
                <div className="row justify-content-around">
                    <div className="col-lg-4 col-md-6 col-sm-12  ">
                        <div className="row process_card pb-5 justify-content-around">
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
                        <div className="row process_card  pb-5">
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
                        <div className="row process_card pb-5">
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
            <div className="Speacial_work_viza">
                <div className="entrol_bg">
                    <div className="d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-center align-items-center ">
                        <div className="col-lg-6 col-md-12 col-sm-12  margin_entroll">
                            <h1 className='text-white mt-5'>Want to Work </h1>
                            <h1 className='text-white'>With Us</h1>
                            <button className=' entroll_button mt-5'>ENTROLL NOW</button>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 '>
                            <div className='entrol_img'>
                                <img className='w-100' src="./images/Spacial_viza/spacial_card.png" alt="Senmon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Special;
