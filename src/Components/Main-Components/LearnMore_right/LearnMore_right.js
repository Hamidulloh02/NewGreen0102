import React,{useEffect, useState} from 'react'
import "./learnmore_right.css"

function LearnMore_right(props) {
    const [propsright, setpropsright] = useState([])
    useEffect(() => {
      setpropsright(props.data[0])
    })
  return (
    <div>
    <div className='card_right_main'>
        <div className='container'>
            <div className='learn_right_body' style={{ backgroundImage: `url(${propsright.bg_img})` }}>
            <div className='bg_green_right'></div>   
                    <div className='row learn_flex  learnmore_right'>
                        <div className='col-lg-6 col-md-12 col-sm-12 right__card__area'>
                            <div className='learnmore_img'>
                                <img className='w-100' src={propsright.card_img} alt={propsright.alt}/>
                            </div>
                        </div>                    
                        <div className='col-lg-6 col-md-12 col-sm-12 main_text_right'>
                            <div className=''>
                            <span className='learntitle'>{propsright.title}</span>
                            <p className='learntext_r'>{propsright.text}</p>
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