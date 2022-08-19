import React,{useState ,useEffect} from 'react';
import './process.css'
import {GrFormNextLink} from 'react-icons/gr'
const Process = (props) => {
    const [propstata, setpropsdata] = useState([])
    useEffect(() => {
        setpropsdata(props.data[0])
    }, [])
    return (
        <div className='Process' style={{ backgroundImage: `url(${propstata.bg_img})` }}>
            <div className="container">
                    <h1 className='text-center mb-5'>{propstata.h1_title}</h1>
                    <div className="row justify-content-around padding">
                        <div className="col-lg-4 col-md-6 col-sm-12 process_card ">
                            <div className="row   justify-content-around">
                                <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                                    <h2>{propstata.number1}</h2>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 text-center">
                                    <h5> {propstata.title1} <GrFormNextLink className='fs-2' /></h5>
                                    <p>
                                    {propstata.text2}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 process_card">
                            <div className="row   ">
                                <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                                    <h2>{propstata.number2}</h2>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 text-center ">
                                    <h5>{propstata.title2}  <GrFormNextLink className='fs-2' /></h5>
                                    <p>
                                       {propstata.text2}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12  process_card">
                            <div className="row ">
                                <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                                    <h2>{propstata.number3}</h2>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 text-center">
                                    <h5>{propstata.title3}  <GrFormNextLink className='fs-2' /></h5>
                                    <p>
                                        {propstata.text3}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Process;
