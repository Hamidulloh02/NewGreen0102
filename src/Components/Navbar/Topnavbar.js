import React ,{useContext , useEffect , useState} from 'react'
import {Context} from '../../useContext__comp/Provider/AuthProvider'
import "./navbar.css"
import topjson from './Topnavbar.json'
function Topnavbar() {
    const{lang,setlang}=useContext(Context)
    const [lang2, setLang2] = useState("uz")
    const [topjsondata,settopjsondata]=useState([])
    function changeLang(val){
        setLang2(val.target.value)
        setlang(val.target.value)
        console.log(lang);
    }
    useEffect(() => {
        {
            (lang == "uz" ? settopjsondata(topjson[0]) : settopjsondata(topjson[1]))
        }
    }, [lang]);
    return (
        <div>
            <div className='topnavbar'>
                <div className='container '>
                    <div className='top_contact'>
                        <div className='numbers'>
                            <div className='nav-div_flex'>
                                <div className=' upper'>
                                    <img className='top-nav-icon' src='./images/Navbar-imgs/top-navbar/Calling.png' alt='call' /> <span className='top__nav__number'>{topjsondata.phone}</span> 
                                </div>
                                <div className='ps-3 '>
                                    <img className='imgline' src='./images/Navbar-imgs/top-navbar/line01.png' />
                                </div>
                                <div className='mobile_none upper'>
                                    <img className='top-nav-icon ' src='./images/Navbar-imgs/top-navbar/Message.png' alt='call' /> {topjsondata.email}
                                </div>
                                <div className='ps-3 '>
                                    <img className='imgline' src='./images/Navbar-imgs/top-navbar/line01.png' />
                                </div>
                                <div className='mobile_none upper'>
                                    <img className='top-nav-icon ' src='./images/Navbar-imgs/top-navbar/Location.png' alt='call' />  {topjsondata.addrice}
                                </div>
                            </div>
                        </div>
                        {/* <div><img src="./images/Navbar-imgs/top-navbar/uzb-flag.png"/></div> */}
                        <div className='lang ms-3 upper d-flex'>
                        <img className='select_flag' src={topjsondata.img}/><select className='sellectlang' value={lang2} onInput={(event)=>{changeLang(event)}}>
                                <option value="uz">{topjsondata.uz}</option>
                                <option value="ja">{topjsondata.jp}</option>
                                <option value="eng">{topjsondata.eng}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topnavbar