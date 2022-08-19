import React from 'react';
import Entrol from '../Main-Components/Entrol_now/Entrol';
import Header from '../Main-Components/Header_Img/Header';
import Faundation from '../Main-Components/Foundation/Faundation';
import Text from '../Main-Components/Text_content/Text';
import Status from '../Main-Components/Status/Status';
import Process from '../Main-Components/Process_of_entrollment/Process';
import header from './Header.json'
import text from './Text.json'
import foundation from './Foundation.json'
import status from './Status.json'
import process from './Procsess.json'
import entrol from './Entrol.json'
const Unverstet = () => {
    return (
        <div className='Unverstet'>
            <Header data={header} />
            <Text data={text} />
            <Faundation data={foundation} />
            <Status data={status}/>
            <Process data={process} />
            <Entrol data={entrol} />
        </div>
    );
}

export default Unverstet;
