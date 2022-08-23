import React from 'react';
import Header from '../Main-Components/Header_Img/Header';
import Text from '../Main-Components/Text_content/Text';
import header from './Header.json'
import text from './Text.json'
import Job_body from './Jobs/Jobs'
import Contact from '../Contact_page/contact_get_info/Get_Inputs'
const Job = () => {
    return (
        <div className='Job'>
            <Header data={header} />
            <Text data={text} />
            <Job_body/>
            <Contact/>

        </div>
    );
}

export default Job;
