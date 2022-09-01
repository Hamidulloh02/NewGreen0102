import React,{useEffect, useState,useContext} from 'react'
import { Context } from '../../../useContext__comp/Provider/AuthProvider'
import "./learnmore_right.css"

function LearnMore_right(props) {
    const [propsright, setpropsright] = useState([])
    const{lang,setlang}=useContext(Context)

    useEffect(() => {
      {
        (lang=="uz"?setpropsright(props.data[0]):setpropsright(props.data[1]))
     }
    }, [lang]);
  return (
    <div>
    <div className='card_right_main'>
        <div className='container'>
            <div className='learn_right_body' style={{ backgroundImage: `url(${propsright.bg_img})` }}>
            <div className='bg_green_right'></div>   
                    <div className='row learn_flex  learnmore_right'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='learnmore_img'>
                                <img className='w-100' src={propsright.card_img} alt={propsright.alt}/>
                            </div>
                        </div>                    
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className=''>
                            <p className='learntitle'>{propsright.title}</p>
                            <p className='learntext'>{propsright.text}</p>
                            <div className='learn_right_btn'>
                                <button className='right_btn'>Learn More</button>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    </div>
    </div>
  )
}

export default LearnMore_right