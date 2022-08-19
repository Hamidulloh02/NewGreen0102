import React,{useEffect, useState} from 'react';
import './status.css'
const Status = (props) => {
    const [propstata, setpropsdata] = useState([])
    useEffect(() => {
        setpropsdata(props.data[0])
    }, [])
    return (
        <div className="Profissional">
            <div className="container">
                <div className="row justify-content-around ">
                    <div className="col-lg-4 col-md-6 col-sm-12  ">
                        <div className="pencil_card">
                            <div className="Institutions">
                                <h1 className='text-white text-center pt-4'>{propstata.card1}</h1>
                                <h2 className='text-white text-center '>{propstata.card1_text}</h2>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="pencil_card">
                            <div className="Institutions">
                                <h1 className='text-white text-center pt-4'>{propstata.card2}</h1>
                                <h2 className='text-white text-center '>{propstata.card2_text}</h2>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12  ">
                        <div className="pencil_card">
                            <div className="Institutions">
                                <h1 className='text-white text-center pt-4'>{propstata.card3}</h1>
                                <h2 className='text-white text-center '>
                                    {propstata.card3_text}
                                </h2>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Status;
