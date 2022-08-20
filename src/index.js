import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import {BrowserRouter , Route , Routes} from 'react-router-dom'

import Main from './Components/Index__page/Index'
import Contact_page from "./Components/Contact_page/Contact_page";
import Works from "./Components/Works/works";
import History from './Components/About page/index'
import Senmon from "./Components/Senmon/Senmon"
import Intern_viza from "./Components/Intern_viza/Intern_viza"
import Jobs from './Components/Job/Job'
import Jobs2 from './Components/Works/works'
import  Certificate from "./Components/Certificat/Certificate"
import Mission__Vision from './Components/Certificat/MisVis'
import Legal_Advices from './Components/Legal_consalting/Legal'
import Businiss_consalting from './Components/Busniss_consalting/Busniss'
import School from './Components/School/School';
import Universtet from "./Components/Unverstet/Unverstet"
import Work_visa from "./Components/Work_viza/Work_viza"
// import Study from ''
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Main/>} />
        <Route path='/jobs-filter' element={<Works/>}/>
        <Route path='/contact' element={<Contact_page/>}/>
        <Route path="/history" element={<History/>} /> 
        <Route path="/certificate" element={<Certificate/>}/>
        <Route path="/mission_vision" element={<Mission__Vision/>}/>
        <Route path="/senmon" element={<Senmon/>} />
        <Route path="/university" element={<Universtet/>}/>
        <Route path="/work_visa" element={< Work_visa/>}/>
        <Route path="/intern_visa" element={<Intern_viza/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/jobs2"  element={<Jobs2/>}/>
        <Route path="/legal_advices" element={<Legal_Advices/>} />
        <Route path="/business_consalting" element={<Businiss_consalting/>}/>
        {/* <Route path="/visa" element={<Special_visa/>} />  */}
        <Route path='/school' element={<School/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

