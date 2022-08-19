import React ,{useEffect, useState}from 'react';
import './strategic.css'
const Strategic = (props) => {
    const [propstata, setpropsdata] = useState([])
useEffect(() => {
 setpropsdata(props.data[0])
},[])
    return (
        <div className="Strategic" style={{ backgroundImage: `url(${propstata.bg_img})` }}>
        <div className="container">
            <div className="row flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 grown">
                    <h1>{propstata.title}</h1>
                    <p className='mb-5'>
                    {propstata.text1} <br /> <br />
                        {propstata.text2}
                    </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 card_img mb-5">
                    <img  src={propstata.card_img} alt="legal" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Strategic;
