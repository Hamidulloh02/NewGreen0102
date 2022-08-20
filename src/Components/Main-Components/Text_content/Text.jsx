import React, {useState, useEffect} from 'react';
import './text.css'
import AOS from 'aos'
const Text = (props) => {
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
