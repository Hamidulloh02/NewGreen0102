import React, {useState, useEffect} from 'react';
import './text.css'
const Text = (props) => {
    const [propstata, setpropsdata] = useState([])
    useEffect(() => {
        setpropsdata(props.data[0])
    }, [])
    return (
        <div>
            <dir className="Text_content" style={{ backgroundImage: `url(${propstata.bg_img})` }}>
                <div className="">
                    <div className="container text ">
                        <h1 className='text-center text_h1 '>{propstata.name}</h1>
                        <p className='text-center mt-1 pb-5'>
                            {propstata.text}
                        </p>
                    </div>
                </div>
            </dir>
        </div>
    );
}

export default Text;
