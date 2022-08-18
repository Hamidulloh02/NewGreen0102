import React, {useEffect} from 'react'
//Components
import Main from './Main/Main.js'
import Offer from './Offer/Offer.js'
import Partners from './Partners/Partners.js'
import About from './About/About'
export default function Index() {
  return (
    <div>
        <Main/>
        <Offer/>
        <About/>
        <Partners/>
    </div>
  )
}
