import React,{useState ,useEffect} from 'react';
import './header.css'
const Header = (props) => {
const [propstata, setpropsdata] = useState([])
useEffect(() => {
 setpropsdata(props.data[0])
},[])
    return (
    
             <div className="Header_img" style={{ backgroundImage: `url(${propstata.bg_img})` }} >
                <h1 data-aos="fade-right"   className='text-center text-white h1'>{propstata.text1}  </h1>
                <h1 data-aos="fade-left"  data-aos-anchor="#example-anchor"   data-aos-offset="500" data-aos-duration="500" className='text-center text-white'>{propstata.text2} </h1>
            </div>

    );
}

export default Header;
