import React, {useState, useEffect,useContext} from 'react';
import { Context } from '../../../useContext__comp/Provider/AuthProvider';
import './text.css'
import AOS from 'aos'
const Text = (props) => {
    const [propstata, setpropsdata] = useState([])
    const{lang,setlang}=useContext(Context)
    useEffect(() => {

        {
            (lang=="uz"?setpropsdata(props.data[0]):setpropsdata(props.data[1]))
        }
    
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
          });
    }, [lang])
    return (
        <div>
            <dir className="Text_content" style={{ backgroundImage: `url(${propstata.bg_img})` }}>
                <div className="">
                    <div className="container text ">
                        <h1  data-aos="fade-right" className='text-center text_h1 '>{propstata.name}</h1>
                        <p data-aos="fade-left" className='text-center mt-1 pb-5'>
                            {propstata.text}
                        </p>
                    </div>
                </div>
            </dir>
        </div>
    );
}

export default Text;
