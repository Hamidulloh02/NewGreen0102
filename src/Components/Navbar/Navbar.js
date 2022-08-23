
import React, { useState, useEffect,useContext} from 'react';
import Topnavbar from "./Topnavbar"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsChevronDown } from "react-icons/bs";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"
import { Link } from "react-router-dom"
//import Json
import aboutjson from "./aboutcompany.json"
import workjson from "./work.json"
import studyjson from "./study.json"
import servicejson from "./service.json"
import {Context} from "../../useContext__comp/Provider/AuthProvider"

function CollapsibleExample() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const{lang,setlang}=useContext(Context)

  // Json data
  const [aboutdata, setaboutdata] = useState([])
  const [workdata, setworkdata] = useState([])
  const [studydata, setstudydata] = useState([])
  const [servicedata, setservicedata] = useState([])

  useEffect(() => {
    {
      (lang == "uz" ? setaboutdata(aboutjson[0]) : setaboutdata(aboutjson[1]))
    }
    {
      (lang == "uz" ?  setworkdata(workjson[0]) :  setworkdata(workjson[1]))
    }
    {
      (lang == "uz" ?   setstudydata(studyjson[0]) :   setstudydata(studyjson[1]))
    }
    {
      (lang == "uz" ?   setservicedata(servicejson[0]) :   setservicedata(servicejson[1]))
    }

    
   
   
    
  }, [lang])
  return (
    <div>
      <div  >
        <Topnavbar  />
        <Navbar expand="lg" variant="dark" >
          <Container>
            <Navbar.Brand href="#home" className='text-dark '>
              <Link to="/">
                <img className='main-logo' src='./images/Navbar-imgs/greenbox_logo.png' />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-success' />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" >
              </Nav>
              <Nav className='minnavbar'>
                <Nav.Link href="#deets" className='text-dark menunav'>
                  <NavDropdown
                    title={
                      <span className="text-dark main_menu_tit"> {aboutdata.title} <BsChevronDown className='dropicon' /></span>
                    }
                    show={show1}
                    onMouseEnter={() => setShow1(true)}
                    onMouseLeave={() => setShow1(false)}
                    onToggle={() => setShow1()}
                  >
                    {/* <NavDropdown.Item as={Link} to="/history" className='menuhover'>{aboutdata.history} </NavDropdown.Item> */}
                    <NavDropdown.Item as={Link} to="/contact" className='menuhover'>{aboutdata.contact}</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/certificate" className='menuhover'>{aboutdata.certificat}</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/mission_vision" className='menuhover'>{aboutdata.missionvison}</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  className='text-dark  menunav '>
                  <NavDropdown
                    title={
                      <span className="text-dark main_menu_tit">{workdata.title} <BsChevronDown className='dropicon' /></span>
                    }
                    show={show2}
                    onMouseEnter={() => setShow2(true)}
                    onMouseLeave={() => setShow2(false)}
                    onToggle={() => setShow2()}
                  >
                    <NavDropdown.Item as={Link} to="/jobs" className='menuhover'>{workdata.job}</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/work_visa" className='menuhover'>{workdata.work_visa}</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/intern_visa" className='menuhover'>{workdata.intern_visa}</NavDropdown.Item>
                    {/* <NavDropdown.Item as={Link} to="#" className='menuhover'>{workdata.register}</NavDropdown.Item> */}
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#deets" className='text-dark menunav'>
                  <NavDropdown
                    title={
                      <span className="text-dark main_menu_tit"> {studydata.title} <BsChevronDown className='dropicon' /></span>
                    }
                    show={show3}

                    onMouseEnter={() => setShow3(true)}
                    onMouseLeave={() => setShow3(false)}
                    onToggle={() => setShow3()}
                  >
                    <NavDropdown.Item as={Link} to="/school" className='menuhover'>{studydata.lang_school}</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/senmon" className='menuhover'>{studydata.senmon}</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/university" className='menuhover'>{studydata.university}</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#deets" className='text-dark  menunav'>
                  <NavDropdown
                    title={
                      <span className="text-dark main_menu_tit">{servicedata.title} <BsChevronDown className='dropicon' /></span>
                    }
                    show={show}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    onToggle={() => setShow()}
                  >
                    <NavDropdown.Item as={Link} to="/legal_advices" className='menuhover'>{servicedata.legal_advice}</NavDropdown.Item>
                    {/* <NavDropdown.Item as={Link} to="#" className='menuhover'>{servicedata.visa}</NavDropdown.Item> */}
                    <NavDropdown.Item as={Link} to="/business_consalting" className='menuhover'>{servicedata.starting_business}</NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse >
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
export default CollapsibleExample;