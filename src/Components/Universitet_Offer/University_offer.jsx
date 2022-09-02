import React from 'react'
//import CSS
import "./university_offer.css"
//import Components
import Header from "../Main-Components/Header_Img/Header"
import Text from "../Main-Components/Text_content/Text"
import Univer_card from '../Main-Components/Univer_card/Univer_card'
//import Json
import Header_json from "./header.json"
import Text_json from "./text.json"
import Cardjson from "./univer_card.json"
import Cardjson1 from "./univer_card2.json"
import Cardjson2 from "./univer_card3.json"

function University_offer() {
  return (
    <div>
       <Header data={Header_json}/>
       <Text data={Text_json}/>
       <Univer_card data={Cardjson}/>
       <Univer_card data={Cardjson1}/>
       <Univer_card data={Cardjson2}/>
    </div>
  )
}

export default University_offer