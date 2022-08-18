import React from 'react';
import './intern.css';
import { GrFormNextLink } from 'react-icons/gr'
const InternViza = () => {
    return (
        <div className='Intern_viza'>
            <div className="header_intern_viza">
                <h1 className='text-center text-white h1'>Intern Visa  </h1>
            </div>
            <div className="intern_viza_uzbek">
                <div className="container">
                    <h1 className='text-center senmon_h1 '>Intern Visa</h1>
                    <p className='text-center mt-1 pb-5'>
                      Intern Viza 技能実習 (stajyor)  viza turi Yaponiya hukumati tarafidan asosan ishchi kuchi <br /> yetishmydigan sohalarga chet eldan ishchi olib kelish uchun tashkil qilingan . Bunda <br /> asosiy ish va ishchi topuvchi sifatida 組合(kumiai)lar faoliyat yuritadi. Stajyor viza bu <br /> odatda Yaponiyada maksimum 3 yilgacha ishlay oladigan viza turi. Odatda bu viza <br /> bilan ish joyini o`zgratira olmaydi.3 yil tugagach mamlakatga qaytishi kerak. Tokiutei <br /> ginoning stajyor bilan 1 xil turiga imtihonsiz o`zgartirish mumkin. Faqat Yapon tili <br /> imtihoni topshiriladi. Stajyor vizada oilani chaqirib bo`lmaydi, keyin viza turini <br /> student yoki boshqa vizalarga ham o`zgartirishni iloji yo`q.
                    </p>
                </div>
            </div>

            <div className="Profissional">
                <div className="container">
                    <div className="row justify-content-around ">
                        <div className="col-lg-4 col-md-6 col-sm-12   pb-5">
                            <div className="pencil_card pt-4 pb-4">
                                <div className="Institutions">
                                    <h1 className='text-white text-center pt-5'>3,000 + </h1>
                                    <h2 className='text-white text-center '>Job Offers</h2>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12  pb-5">
                            <div className="pencil_card pt-4 pb-">
                                <div className="Institutions">
                                    <h1 className='text-white text-center pt-5'>1,5 + </h1>
                                    <h2 className='text-white text-center pb-5 '>International Labors</h2>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12  pb-5 ">
                            <div className="pencil_card pt-4 pb-4">
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
                                    <h5>Strategy  <GrFormNextLink className='fs-2 ' /></h5>
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
                <div className="Entrol_intern_viza">
                    <div className="entrol_bg">
                        <div className="d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-center align-items-center ">
                            <div className="col-lg-6 col-md-12 col-sm-12  margin_entroll">
                                <h1 className='text-white mt-5'>Want to Work </h1>
                                <h1 className='text-white'>With Us</h1>
                                <button className=' entroll_button mt-5'>ENTROLL NOW</button>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 '>
                                <div className='entrol_img'>
                                    <img className='w-100' src="./images/Intern/intern_card.png" alt="Senmon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InternViza;
