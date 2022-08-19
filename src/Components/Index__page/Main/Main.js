import React , {useEffect} from 'react'
import "./Main.css"
import AOS from "aos"
function Main() {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <>
    <div className='mainbody' data-aos="zoom-in">
        <div className='container'>
            <div className='my-card d-flex flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-center align-items-center'>
                <div className=' col-lg-6 col-md-6 col-sm-12 p-3'>
                        <h1>Work in Japan</h1>
                        <h1>study and visa services</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        <div className='btns'>
                            <button className='btn1'>Vacancies</button>
                            <button className='btn2'>Apply Now</button>
                        </div>
                </div>
                <div className=' col-lg-6 col-md-6 col-sm-12 p-3'>
                  <div className='mainpage001'>
                     <img className='mainphoto' src='./images/Indexpage-img/Main-img.png'/>                                        
                  </div>

                </div>
            </div>
        </div>
    </div>    
    </>
  )
}

export default Main