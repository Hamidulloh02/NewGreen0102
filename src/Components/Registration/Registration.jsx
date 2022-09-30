import React,{useState,useEffect} from 'react'
//CSS
import "./registration.css"
//Json
import regisJson from "./regis.json"
function Registration() {
    const [propsdata,setpropsdata] = useState([])
    useEffect(() => {
      setpropsdata(regisJson[0])
    },[])
    return (
        <div>
            <div className="registration__main">
                <div className="container">
                    <div className="row">
                        <div className="col-6">

                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <h3 className='regis_title'>{propsdata.title}</h3>
                            <div className='row mb-4'>
                                <div className="col-6">
                                    <label htmlFor="">{propsdata.firstname}</label>
                                    <div className='div_inp me-4'>
                                        <input className="regis_input" type="text" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="">{propsdata.lastname}</label>
                                    <div  className='div_inp'>
                                        <input className="regis_input" type="text" />
                                    </div>
                                </div>
                            </div>
                            <label htmlFor="">{propsdata.email}</label>
                            <div  className='div_inp'>
                                <input className="regis_input" type="email" />
                            </div>
                            <div className='row mt-4 '>
                                <div className="col-6">
                                    <label htmlFor="">{propsdata.password}</label>
                                    <div  className='div_inp me-4'>
                                        <input className="regis_input" type="password" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="">{propsdata.conf_password}</label>
                                    <div  className='div_inp'>
                                        <input className="regis_input" type="password" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <button className='regis__btn'>{propsdata.regis_btn}</button>
                            </div>
                            <div className='text-center mt-3'>
                                <a href="">{propsdata.link}</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration