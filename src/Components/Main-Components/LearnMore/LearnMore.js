import React, { useEffect, useState } from 'react'
import "./learnmore.css"

function LearnMore(props) {
  const [propsdata , setPoropsData] = useState([])
  useEffect(()=>{
    setPoropsData(props.data[0])
  }, [])
  console.log(props.data);
  return (
    <div>
        <div className='container'>
            <div className='learn_bg' style={{ backgroundImage: `url(${propsdata.bg_img})` }}>
              <div className='learn_morecard d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-center align-items-center'>
                <div className='bg_green'>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 learn_text_main'>
                    <p className='learn_title'>{propsdata.title}</p>
                    <p className='learn_text'>{propsdata.text}</p>
                    <div className='mainbtn'>
                      <button className='learnbtn'>Learn More</button>
                    </div>  
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 learn_img'>
                  <div className='card_img01'>
                        <img className='allimg' style={{width:propsdata.width}}  src={propsdata.card_img} alt={propsdata.alt}/>
                  </div>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default LearnMore