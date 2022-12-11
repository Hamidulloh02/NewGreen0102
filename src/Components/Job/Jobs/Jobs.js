import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../../../useContext__comp/Provider/AuthProvider'
import "./jobs.css"
//import Json
import Cardjson from "./jop_eng.json"
import Cardjsonjp from "./job_jp.json"

function Jobs() {
    const [carddata, setcarddata] = useState([])
    const [carddatajp, setcarddatajp] = useState([])
    const [carddata_main, setcarddata_main] = useState([])
    const { lang, setlang } = useContext(Context)

    useEffect(() => {

        {
            (lang == "uz" ? setcarddatajp(Cardjson) : setcarddatajp(Cardjsonjp))
        }


    }, [lang])
    function cardFunc(index) {
        // setcarddata_main(carddata[index])
        setcarddata_main(carddatajp[index])
        // console.log(carddatamain)
    }
    return (
        <div>
            <div className='container'>
                <div className='row dropjob'>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div>
                            <div className='jobanmount '>Jobs  2495</div>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div className='twoselect'>
                            <select className='my_sellect p-3'>
                                <option>Filter</option>
                                <option></option>
                            </select>
                            <select className='my_sellect p-3'>
                                <option className='p-5'>Newest First</option>
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
                            carddatajp.map((e, index) => {
                                return (
                                    <>
                                        <a href='#full' className='jobcard' onClick={() => { cardFunc(index) }}>
                                            <div>
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
                                        </a>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div id='full' className='col-xl-8 col-lg-8 col-md-12 col-sm-12 p-4 mt-2 #full'>
                        <div className='container fronttype p-3'>
                            <h3>{carddata_main.Orientation}</h3>
                            <h3>{carddata_main.Salary_start}-{carddata_main.Salary_end}/{carddata_main.Salary_type}</h3>
                            {/* <h4>{carddata_main.Salary_type}</h4> */}
                            <p>{carddata_main.carddatamain}</p>
                            <div className='flex_normal '>
                                <p className='jobtitle mt-3'>{carddata_main.Fulname}</p>
                                <p>{carddata_main.Data}</p>
                            </div>
                            <div className='btn_remote'>
                                <i class="bi bi-house-door me-2 mb-2"></i><h5>{carddata_main.Remotejob}</h5>
                            </div>
                            <div className='mt-5'>
                                <p className='jobtitle'>{carddata_main.Speciaty}</p>
                                <p className='btn_frond'>{carddata_main.Prog_lan}</p>
                            </div>
                            <div className='mt-5 mb-3'>
                                <p className='jobtitle'>{carddata_main.Prog_text}</p>
                                <p className='btn_frond '>{carddata_main.Prog_lan}</p>
                            </div>
                            <div>
                                <div className='container'>
                                    <p className='jobtitle mt-5'>{carddata_main.Frawemork_text}</p>
                                    <div className='row'>
                                        <div className=' col-xl-3 col-lg-3 col-md-4 col-sm-6 '>
                                            <p className='btn_frond'>{carddata_main.Framework1}</p>
                                        </div>
                                        <div className=' col-xl-3 col-lg-3 col-md-4 col-sm-6 '>
                                            <p className='btn_frond'>{carddata_main.Framework2}</p>
                                        </div>
                                        <div className=' col-xl-3 col-lg-3 col-md-4 col-sm-6 '>
                                            <p className='btn_frond'>{carddata_main.Framework3}</p>
                                        </div>
                                        <div className=' col-xl-3 col-lg-3 col-md-4 col-sm-6 '>
                                            <p className='btn_frond'>{carddata_main.Framework4}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                                            <p className='btn_frond'>{carddata_main.Framework5}</p>
                                        </div>
                                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                                            <p className='btn_frond'>{carddata_main.Framework6}</p>
                                        </div>
                                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                                            <p className='btn_frond'>{carddata_main.Framework7}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                                            <p className='btn_frond'>{carddata_main.Framework8}</p>
                                        </div>
                                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                                            <p className='btn_frond'>{carddata_main.Framework9}</p>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <p className='jobtitle mt-5'>{carddata_main.Expert_level}</p>
                                    <p className='btn_frond'>{carddata_main.Senior}</p>
                                </div>
                                <div>
                                    <p className='jobtitle mt-5'>{carddata_main.Working_text}</p>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12'>
                                                <div className='benefitbtn'>{carddata_main.Work1}</div>
                                            </div>
                                            <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12'>
                                                <div className='benefitbtn2'>{carddata_main.Work2}</div>
                                            </div>
                                        </div>
                                        <div className='row mt-4'>
                                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                                <div className='benefitbtn3'>{carddata_main.Work3}</div>
                                            </div>
                                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                                <div className='benefitbtn3'>{carddata_main.Work4}</div>
                                            </div>
                                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                                <div className='benefitbtn3'>{carddata_main.Work5}</div>
                                            </div>

                                        </div>
                                        <div className='row mt-4'>
                                            <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12'>
                                                <div className='benefitbtn2'>{carddata_main.Work6}</div>
                                            </div>
                                            <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12'>
                                                <div className='benefitbtn'>{carddata_main.Work7}</div>
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