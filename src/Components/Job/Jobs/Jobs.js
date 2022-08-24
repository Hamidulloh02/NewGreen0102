import React, { useEffect, useState,useContext } from 'react'
import "./jobs.css"
import { Context } from '../../../useContext__comp/Provider/AuthProvider'
//import Json
import Cardjson from "./jop_eng.json"
import Cardjsonjp from"./job_jp.json"
import filter_json from "./filter.json"

function Jobs() {
    const [carddata, setcarddata] = useState([])
    const[filter,setfilter]=useState([])
    const{lang,setlang}=useContext(Context)
    useEffect(() => {
        {
            (lang == "uz" ? setcarddata(Cardjson)  :  setcarddata(Cardjsonjp))
          }
        
          {
            (lang == "uz" ? setfilter(filter_json[0])  :  setfilter(filter_json[1]))
          }

        
        
    }, [lang])
    function cardFunc(index){
        console.log(index);
    }
    return (
        <div>
            <div className='container'>
                <div className='row dropjob'>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div>
                            <div className='jobanmount '>{filter.jobs}</div>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div className='twoselect'>
                            <select className='my_sellect p-3'>
                                <option>{filter.filter}</option>
                                <option></option>
                            </select>
                            <select className='my_sellect p-3'>
                                <option className='p-5'>{filter.first}</option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='maintitle'>
                </div>
                <div className='row'>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                        {
                            carddata.map((e, index) => {
                                return (
                                    <>
                                        <div className='jobcard' onClick={()=>{cardFunc(index)}}>
                                            <div className='container pt-3'>
                                                <div className='jobcard-m1'>
                                                    <div className='div1'>
                                                        <h4>{e.Orientation}</h4>
                                                    </div>
                                                    <div className='div2'>
                                                        <i class="bi bi-house-door"></i>
                                                    </div>
                                                </div>
                                                <h5 className='h5teg'> {e.Salary_start} - {e.Salary_end}/ {e.Salary_type}</h5>
                                                <p>{e.Soft_skills}</p>
                                                <div className='jobcard-m2'>
                                                    <p className='jobcard-m2-text'>{e.Fulname}</p>
                                                    <p>{e.Data}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 p-4 mt-2'>
                        <div className='container fronttype p-3'>
                            <h3>Frontend Developer (React)</h3>
                            <h4>$3,500 - 5,700 / month</h4>
                            <p>JavaScript</p>
                            <div className='flex_normal '>
                                <p className='jobtitle mt-3'>Stark Industries</p>
                                <p>August 11, 2022</p>
                            </div>
                            <div className='btn_remote'>
                                <i class="bi bi-house-door me-2 mb-2"></i><h5>Remote Job</h5>
                            </div>
                            <div className='mt-5'>
                                <p className='jobtitle'>Speciaty</p>
                                <p className='btn_frond'>Frontend</p>
                            </div>
                            <div className='mt-5 mb-3'>
                                <p className='jobtitle'>Programming languages</p>
                                <p className='btn_frond '>Java Script</p>
                            </div>
                            <div>
                                <div className='container'>
                                    <p className='jobtitle mt-5'>Frameworks</p>
                                    <div className='row'>
                                        <div className=' col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-4'>
                                            <p className='btn_frond'>TypeScript</p>
                                        </div>
                                        <div className=' col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-4'>
                                            <p className='btn_frond'>Webpack</p>
                                        </div>
                                        <div className=' col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-4'>
                                            <p className='btn_frond'>Docker</p>
                                        </div>
                                        <div className=' col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-4'>
                                            <p className='btn_frond'>React.js</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                                            <p className='btn_frond'>Bootstrap</p>
                                        </div>
                                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                                            <p className='btn_frond'>Tailwind</p>
                                        </div>
                                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                                            <p className='btn_frond'>HTML</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                                            <p className='btn_frond'>Git</p>
                                        </div>
                                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                                            <p className='btn_frond'>CSS</p>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <p className='jobtitle mt-5'>Expertise level</p>
                                    <p className='btn_frond'>Senior</p>
                                </div>
                                <div>
                                    <p className='jobtitle mt-5'>Working conditions and benefits</p>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12'>
                                                <div className='benefitbtn'>equipment for work</div>
                                            </div>
                                            <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12'>
                                                <div className='benefitbtn2'>compensation for language courses</div>
                                            </div>
                                        </div>
                                        <div className='row mt-4'>
                                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                                <div className='benefitbtn3'>paid courses</div>
                                            </div>
                                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                                <div className='benefitbtn3'>paid courses</div>
                                            </div>
                                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                                <div className='benefitbtn3'>paid courses</div>
                                            </div>

                                        </div>
                                        <div className='row mt-4'>
                                            <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12'>
                                                <div className='benefitbtn2'>compensation for language courses</div>
                                            </div>
                                            <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12'>
                                                <div className='benefitbtn'>equipment for work</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Jobs