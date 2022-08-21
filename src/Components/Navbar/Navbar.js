import React,{useState, useEffect} from 'react';
import Topnavbar from "./Topnavbar"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsChevronDown } from "react-icons/bs";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"
import { Link } from "react-router-dom"

function CollapsibleExample() {
  const [toggle ,settoggle] = useState("none")
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const change=()=>{
    settoggle("none")
  }
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 500 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `header-section d-none d-xl-block ${sticky}`;
  return (
    <div>
  <div  >
  <Topnavbar/>
        <Navbar expand="lg"  variant="dark" >
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
                <span className="text-dark main_menu_tit"> About Company <BsChevronDown className='dropicon' /></span>
               }
                  show={show1}
                  onMouseEnter={() => setShow1(true)}
                  onMouseLeave={() => setShow1(false)}
                  onToggle={() => setShow1()}
                >
                <NavDropdown.Item href="/history" className='menuhover'>History </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="/contact">Contact</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="/certificate">Certificate</Link> </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="/mission_vision">Mission&Vison</Link> </NavDropdown.Item>
              </NavDropdown>
                </Nav.Link>
                <Nav.Link
                 href="#deets" 
                 className='text-dark  menunav '>
                <NavDropdown
              title={
                <span className="text-dark main_menu_tit">Work <BsChevronDown className='dropicon' /></span>
               }
                  show={show2}
                  onMouseEnter={() => setShow2(true)}
                  onMouseLeave={() => setShow2(false)}
                  onToggle={() => setShow2()}
                >
                <NavDropdown.Item><Link className='a_link menuhover' to="/jobs">Job</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="/work_visa">Work Visa</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="/intern_visa">Intern visa</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="#">Register</Link></NavDropdown.Item>
              </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#deets" className='text-dark menunav'>
                <NavDropdown
                 title={
                <span className="text-dark main_menu_tit"> Study <BsChevronDown className='dropicon' /></span>
               }
                  show={show3}
                  onMouseEnter={() => setShow3(true)}
                  onMouseLeave={() => setShow3(false)}
                  onToggle={() => setShow3()}
                >
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="/school">Lang school</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="/senmon">Senmon</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="/university">University</Link></NavDropdown.Item>
              </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#deets" className='text-dark  menunav'>
                <NavDropdown
              title={
                <span className="text-dark main_menu_tit"> Services <BsChevronDown className='dropicon' /></span>
               }
                  show={show}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                  onToggle={() => setShow()}
                >
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="/legal_advices">Legal advice</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="/visa">Visa</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" className='menuhover'><Link className='a_link' to="/business_consalting">Strting Business</Link></NavDropdown.Item>
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