import React from 'react'
import "./navbar.css"
function topnavbar() {
    return (
        <div>
            <div className='topnavbar'>
                <div className='container '>
                    <div className='top_contact'>
                        <div className='numbers'>
                            <div className='nav-div_flex'>
                                <div className=' upper'>
                                    <img className='top-nav-icon' src='./images/Navbar-imgs/top-navbar/Calling.png' alt='call' />  +998(90) 444 14 88
                                </div>
                                <div className='ps-3 '>
                                    <img className='imgline' src='./images/Navbar-imgs/top-navbar/line01.png' />
                                </div>
                                <div className='mobile_none upper'>
                                    <img className='top-nav-icon ' src='./images/Navbar-imgs/top-navbar/Message.png' alt='call' /> info@green-box.com
                                </div>
                                <div className='ps-3 '>
                                    <img className='imgline' src='./images/Navbar-imgs/top-navbar/line01.png' />
                                </div>
                                <div className='mobile_none upper'>
                                    <img className='top-nav-icon ' src='./images/Navbar-imgs/top-navbar/Location.png' alt='call' />  Green Box, Japan, 〒039-2501 Aomori
                                </div>
                            </div>
                        </div>
                        {/* <div><img src="./images/Navbar-imgs/top-navbar/uzb-flag.png"/></div> */}
                        <div className='lang ms-3 upper'>
                            <select className='sellectlang'>
                                <option>Uz</option>
                                <option>Ja</option>
                                <option>Eng</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default topnavbar