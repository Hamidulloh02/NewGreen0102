import React from 'react';
import './legal.css'
import { GrFormNextLink } from 'react-icons/gr'
const Legal = () => {
    return (
        <div className='Legal_consalting'>
            <div className="header_Legal">
                <h1 className='text-center text-white h1'>Legal Consulting  </h1>
            </div>
            <div className="Strategic">
                <div className="container">
                    <div className="row flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 ">
                            <h1>Strategic growth support <br /> from an executive with <br /> experience.</h1>
                            <p className='mb-5'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors. <br /> <br />
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 card_img mb-5">
                            <img className='w-100' src="./images/Legal/card1.png" alt="legal" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Process_legal">
                <div className="container">
                    <h1 className='text-center mb-5'>Process of Enrollment</h1>
                    <div className="row justify-content-around">
                        <div className="col-lg-4 col-md-6 col-sm-12  ">
                            <div className="row process_card p-3 justify-content-around">
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
                            <div className="row process_card  p-3">
                                <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                                    <h2 >02</h2>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 text-center ">
                                    <h5>Strategy  <GrFormNextLink className='fs-2 ' /></h5>
                                    <p>
                                        There are many variations of
                                        Lorem Ipsum available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="row process_card  p-3">
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
            <div className="Perfect_servis">
                <div className="container">
                    <div className="row justify-content-around text-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5 ">
                            <div className="perfect_card">
                                <h1>Perfect Services</h1>
                                <p>
                                    There are many variations of passages <br /> of Lorem Ipsum available, but the <br /> majority
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5  ">
                            <div className="perfect_card">
                                <h1>Talanted Team</h1>
                                <p>
                                    There are many variations of passages <br /> of Lorem Ipsum available, but the <br /> majority
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5">
                            <div className="perfect_card">
                                <h1>Ultimate Flexibility</h1>
                                <p>
                                    There are many variations of passages <br /> of Lorem Ipsum available, but the <br /> majority
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Legal;
