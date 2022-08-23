import React from 'react';
import Entrol from '../Main-Components/Entrol_now/Entrol';
import Header from '../Main-Components/Header_Img/Header';
import Text from '../Main-Components/Text_content/Text';
import Status from '../Main-Components/Status/Status';
import Process from '../Main-Components/Process_of_entrollment/Process';
import header from './Header.json'
import text from './Text.json'
import status from './Status.json'
import process from './Process.json'
import entrol from './Entrol.json'
import Contact from '../Contact_page/contact_get_info/Get_Inputs'
const InternViza = () => {
    return (
        <div className='Intern_viza'>
            <Header data={header} />
            <Text data={text} />
            <Status data={status}/>
            <Process data={process}/>
            <Entrol data={entrol}/>
            <Contact/>
        </div>
    );
}

export default InternViza;
