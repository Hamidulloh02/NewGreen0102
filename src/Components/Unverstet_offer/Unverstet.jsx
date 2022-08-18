import React, { useState } from 'react';
import './unverstet_offer.css'
import { useEffect } from 'react';
import Axios from 'axios'
const Unverstet = () => {
    const [Data, setdata] = useState([]);
    useEffect(() => {
        Axios.get("http://myjson.dit.upm.es/api/bins/8ntc")
            .then(res => {
                console.log(res.data);
                setdata(res.data)
                console.log("DAta keldi", Data);
            })

    }, []);
    return (
        <div className='Unverstet_offer'>
            <div className="header_unverstet_offer">
                <h1 className='text-center text-white h1'>Choose From Top <br /> Universities in Japan </h1>
            </div>
            <div className="Dream">
                <div className="container text-center">
                    <h1>Your Dream University</h1>
                    <p>
                        The modern Japanese higher education system was adapted <br /> from a number of methods and ideas inspired from Western <br /> education systems that were integrated with their traditional <br /> Shinto, Buddhist, and Confucianist pedagogical <br /> philosophies. Throughout the 19th and 20th centuries, many <br /> major reforms were introduced in the field of higher <br /> education across Japan.
                    </p>
                </div>
            </div>
            <div className="offer_card">
                <div className="container">
                    <div className="row card_row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card">
                                <img src="./images/unverstet_offer/card1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card">
                                <img src="./images/unverstet_offer/card2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card">
                                <img src="./images/unverstet_offer/card3.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card">
                                <img src="./images/unverstet_offer/card4.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card">
                                <img src="./images/unverstet_offer/card5.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card">
                                <img src="./images/unverstet_offer/card6.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card">
                                <img src="./images/unverstet_offer/card7.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card">
                                <img src="./images/unverstet_offer/card8.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card">
                                <img src="./images/unverstet_offer/card9.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Unverstet;
