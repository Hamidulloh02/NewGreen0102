import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsChevronDown } from "react-icons/bs";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"
import { Link } from "react-router-dom"

function CollapsibleExample() {
  const [toggle, settoggle] = useState("none")
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const change = () => {
    settoggle("none")
  }
  return (
    <div>

      <div className='mainnavbar'>
        <div className='topnavbar'>
          <div className='container '>
            <div className='top_contact'>
              <div className='numbers'>
                <div className='nav-div_flex'>
                  <div className=' upper'>
                    <img className='top-nav-icon' src='./images/Navbar-imgs/top-navbar/Calling.png' alt='call' />  +998(90) 444 14 88
                  </div>
                  <div className='mobile_none upper'>
                    <img className='top-nav-icon ' src='./images/Navbar-imgs/top-navbar/Message.png' alt='call' /> info@green-box.com
                  </div>
                  <div className='mobile_none upper'>
                    <img className='top-nav-icon ' src='./images/Navbar-imgs/top-navbar/Location.png' alt='call' />  Green Box, Japan, 〒039-2501 Aomori
                  </div>
                </div>
              </div>
              {/* <div><img src="./images/Navbar-imgs/top-navbar/uzb-flag.png"/></div> */}
              <div className='lang ms-3 upper'>
                <select className='sellectlang'>
                  <option>Uz</option>
                  <option>Ja</option>
                  <option>Eng</option>
                </select>
              </div>
            </div>
          </div>
        </div>


        <Navbar expand="lg" bg="light" variant="dark">
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
                      <span className="text-dark"> About Company <BsChevronDown className='dropicon' /></span>
                    }
                    show={show1}
                    onMouseEnter={() => setShow1(true)}
                    onMouseLeave={() => setShow1(false)}
                    onToggle={() => setShow1()}
                  >
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/history">History</Link> </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/contact">Contact</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/certificate">Certificate</Link> </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/mission_vision">Mission&Vison</Link> </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  className='text-dark  menunav '>
                  <NavDropdown
                    title={
                      <span className="text-dark">Work <BsChevronDown className='dropicon' /></span>
                    }
                    show={show2}
                    onMouseEnter={() => setShow2(true)}
                    onMouseLeave={() => setShow2(false)}
                    onToggle={() => setShow2()}
                  >
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/jobs">Job</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/work_visa">Work Visa</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/intern_visa">Intern visa</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="#">Register</Link></NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#deets" className='text-dark menunav'>
                  <NavDropdown
                    title={
                      <span className="text-dark"> Study <BsChevronDown className='dropicon' /></span>
                    }
                    show={show3}
                    onMouseEnter={() => setShow3(true)}
                    onMouseLeave={() => setShow3(false)}
                    onToggle={() => setShow3()}
                  >
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/school">Lang school</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/senmon">Senmon</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/university">University</Link></NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#deets" className='text-dark  menunav'>
                  <NavDropdown
                    title={
                      <span className="text-dark"> Services <BsChevronDown className='dropicon' /></span>
                    }
                    show={show}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    onToggle={() => setShow()}
                  >
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/legal_advices">Legal advice</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/visa">Visa</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"><Link className='a_link' to="/business_consalting">Strting Business</Link></NavDropdown.Item>
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