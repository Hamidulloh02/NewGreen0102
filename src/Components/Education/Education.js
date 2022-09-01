import React,{useContext,useEffect} from 'react'
import { Context } from '../../useContext__comp/Provider/AuthProvider'
// import { Link } from 'react-router-dom'

//import Components
import LearnMore from '../Main-Components/LearnMore/LearnMore'
import LearnMore_right from '../Main-Components/LearnMore_right/LearnMore_right'
import Heder from "../Main-Components/Header_Img/Header"
import Text from "../Main-Components/Text_content/Text"

//import Json
import headerjson from "./heder.json"
import textjson from "./Text.json"
import learn_left1json from "./learnmore.json"
import learn_rightjson from "./learnmore_right.json"
import learn_left2json from "./learnmore2.json"


function Education() {
 
  return (
    <div>
          <Heder data={headerjson}/>
          <Text data={textjson }/>
          <LearnMore data={learn_left1json}/>  
          <LearnMore_right data={learn_rightjson}/>
          <LearnMore data={learn_left2json}/>
    </div>
  )
}

export default Education