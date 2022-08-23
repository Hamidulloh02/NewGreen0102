import React from 'react';
import Header from '../Main-Components/Header_Img/Header';
import Perfect from '../Main-Components/Perfect_service/Perfect';
import Process from '../Main-Components/Process_of_entrollment/Process';
import Status from '../Main-Components/Status/Status';
import Strategic from '../Main-Components/Strategic_grown/Strategic';
import header from './Header.json'
import strategic from './Strategic.json'
import process from './Process.json'
import perfect from './Perfect.json'
import Contact from '../Contact_page/contact_get_info/Get_Inputs'
const Legal = () => {
    return (
        <div  className='Legal_consalting'>
             <Header data={header}/>
             <Strategic data={strategic} />
            <Process data={process} />
            <Perfect data={perfect}/>
            <Contact/>
        </div>
    );
}

export default Legal;
