import React from 'react'
//import Components
import LearnMore from '../Main-Components/LearnMore/LearnMore'
import LearnMore_right from '../Main-Components/LearnMore_right/LearnMore_right'
import Heder from "../Main-Components/Header_Img/Header"
import Text from "../Main-Components/Text_content/Text"

//import jeson
import work_header from "./work_header.json"
import textjson from './Text.json'
import learn_left from "./learnmore.json"
import learn_right from "./learnmore_right.json"
import learn_left2 from "./learnmore2.json"
import Contact from '../Contact_page/contact_get_info/Get_Inputs'
function Work() {
  console.log(work_header)
  return (
    <div>
          <Heder data={work_header}/>
          <Text data={textjson}/>
          <LearnMore data={learn_left}/>  
          <LearnMore_right data={learn_right}/>
          <LearnMore data={learn_left2}/>
          <Contact/>
    </div>
  )
}

export default Work