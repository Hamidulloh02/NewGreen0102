import React  from 'react';
import Entrol from '../Main-Components/Entrol_now/Entrol';
import Header from '../Main-Components/Header_Img/Header';
import Year from '../Main-Components/Year/Year';
import Text from '../Main-Components/Text_content/Text';
import Status from '../Main-Components/Status/Status';
import Process from '../Main-Components/Process_of_entrollment/Process';
import headerjson from './Header.json'
import textjson from './Text.json'
import year from './year.json'
import statusjson from "./Status.json"
import processjson from './Process.json'
import entroljson from './Entrol.json'
import Contact from '../Contact_page/contact_get_info/Get_Inputs'
import Work from '../Work/Work';

const School = () => {
    return (
        <div className='School'>
            <Header  data={headerjson} />
            <Text data={textjson} />
            <Year data={year} />
            <Status data={statusjson}/>
            <Process data={processjson} />
            <Entrol data={entroljson} />
            <Contact/>
          
        </div>
    );
}

export default School;
