import React from 'react';
import Header from '../Main-Components/Header_Img/Header';
import Perfect from '../Main-Components/Perfect_service/Perfect';
import Process from '../Main-Components/Process_of_entrollment/Process';
import Status from '../Main-Components/Status/Status';
import Strategic from '../Main-Components/Strategic_grown/Strategic';
import headerjson from './Header.json'
import strategic from './Strategic.json'
import process from './Process.json'
import perfect from './Perfect.json'
const Busniss = () => {
    return (
        <div className='Busniss_consalting'>
             <Header data={headerjson}  />
             <Strategic data={strategic} />
            <Process data={process} />
            <Perfect data={perfect}/>
        </div>
    );
}

export default Busniss;
