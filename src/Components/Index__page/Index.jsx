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
        <iframe
        class="map mt-5"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.8293859990536!2d69.24700580959565!3d41.356062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c8dae4b0503%3A0xe6ed62f21100f334!2z0JzQkNCT0JDQl9CY0J0g0KHQktCV0KLQntCU0JjQntCU0J3Qq9CZINCc0JjQoA!5e0!3m2!1sru!2s!4v1657949955673!5m2!1sru!2s"
      >
      </iframe>
    </div>
  )
}
