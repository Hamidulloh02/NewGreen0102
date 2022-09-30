import React,{useState, useEffect} from 'react'
import "./login.css"


//Json 
import Log_in_Json from "./login.json"
console.log(Log_in_Json)

function Log_In() {
    const [propsdata,setpropsdata] = useState([])
    useEffect(() => {
        setpropsdata(Log_in_Json[0])
    },[])
  return (
    <div>
        <div className="Log_main">
        <div className='container'>
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 login__form">
                    <div className='w-100 ms-4'>
                        <h3 className='login__text'>{propsdata.title}</h3>
                        <label htmlFor="">Name*</label>
                        <div>
                            <input className='login__input ps-2' type="text" />
                        </div>
                        <label htmlFor="">Password*</label>
                        <div>
                            <input className='login__input ps-2'  type="password" />
                        </div>
                        <button className='login__btn'>Log in</button>
                        <p className='text-center w-75'>Create new accaunt</p>                        
                    </div>
                </div>                    
            </div>
            </div>
        </div>
    </div>
  )
}

export default Log_In