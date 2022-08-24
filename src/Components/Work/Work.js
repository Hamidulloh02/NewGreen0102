import React from 'react'
//import Components
import LearnMore from '../LearnMore/LearnMore'
import LearnMore_right from '../Main-Components/LearnMore_right/LearnMore_right'
import Heder from "../Main-Components/Header_Img/Header"
import Text from "../Main-Components/Text_content/Text"

//import jeson
import work_header from "./work_header.json"
import textjson from './Text.json'
import learn_left from "./learnmore.json"
import learn_right from "./learnmore_right.json"
import learn_left2 from "./learnmore2.json"
function Work() {
  return (
    <div>
          <Heder data={work_header}/>
          <Text data={textjson}/>
          <LearnMore data={learn_left}/>  
          <LearnMore_right data={learn_right}/>
          <LearnMore data={learn_left2}/>
    </div>
  )
}

export default Work