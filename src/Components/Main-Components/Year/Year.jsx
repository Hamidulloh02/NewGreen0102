import React,{useEffect,useState} from 'react';
import './year.css'
import AOS from 'aos'
const Year = (props) => {
    const [propstata, setpropsdata] = useState([])
    useEffect(() => {
        setpropsdata(props.data[0])

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [])
    return (
        <div className="Year">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-4 col-md-6 col-sm-12  " data-aos="zoom-out-right">
                            <div className="pencil_card">
                                <div className="pencil">
                                    <img className='w-50 pencil_img ' src={propstata.img1} alt={propstata.img_alt} />
                                </div>
                                <h1 className='text-center  mt-4'>{propstata.year1}</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="zoom-out">
                            <div className="pencil_card">
                                <div className="pencil">
                                    <img className='w-50 pencil_img ' src={propstata.img2} alt={propstata.img_alt} />
                                </div>
                                <h1 className=' mt-4'>{propstata.year2}</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12  " data-aos="zoom-out-left">
                            <div className="pencil_card">
                                <div className="pencil">
                                    <img className='w-50 pencil_img ' src={propstata.img3} alt={propstata.img_alt} />
                                </div>
                                <h1 className='text-center  mt-4'>{propstata.year3}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    );
}

export default Year;
