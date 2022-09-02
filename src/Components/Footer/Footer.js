import React, { useEffect, useState, useContext } from 'react'
import "./footer.css"
import { Context } from '../../useContext__comp/Provider/AuthProvider'
import FooterJ from '../Footer/FooterJ.json'
import AOS from 'aos'
function Footer() {


    const [footerdatajson, setFooterdatajson] = useState([])
    const{lang,setlang}=useContext(Context)
    useEffect(() => {

        {
            (lang == "uz" ? setFooterdatajson(FooterJ[0]) : setFooterdatajson(FooterJ[1]))
        }

       

        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    })
    return (
        <>
            <div className='footerbody' style={{ backgroundImage: `url(${footerdatajson.footerBodyBgImg})` }}>

                <div className='bgdark'>
                    <div className='backfooter'>
                        <div className='container'>
                            <div className='row footermenu'>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 justify-content-center'>
                                    <div className='logo justify-content-center'>
                                        <img className='me-3' src='./images/Footer-img/greenbox_logo.png' />
                                    </div>
                                    <p className='footertext text-center'>{footerdatajson.textLOGOBOTTOM}</p>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                                    <div className="row mt-4">
                                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                            <ul>
                                                <li className='footertitle py-3'>{footerdatajson.textCom}</li>
                                                <li>{footerdatajson.textAb}</li>
                                                <li>{footerdatajson.textCon}</li>
                                                <li>{footerdatajson.textCer}</li>
                                                <li>{footerdatajson.textMV}</li>
                                            </ul>
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                            <ul>
                                                <li className=' footertitle py-3'>{footerdatajson.textSer}</li>
                                                <li>{footerdatajson.textLA}</li>
                                                <li>{footerdatajson.textVis}</li>
                                                <li>{footerdatajson.textSB}</li>
                                                <li>{footerdatajson.textJa}</li>
                                            </ul>
                                        </div>
                                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                                            <ul>
                                                <li className=' footertitle py-3'>{footerdatajson.textHelp}</li>
                                                <li>{footerdatajson.textHC}</li>
                                                <li>{footerdatajson.textCS}</li>
                                                <li>{footerdatajson.textINS}</li>
                                                <li>{footerdatajson.textHIW}</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sofft'>
                <p className='mt-1'>Powered by @soff_hub</p>
            </div>
        </>

    )
}

export default Footer