import React from 'react';
import logo_1 from "../../assets/images/logo_1.webp";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      
     
      <Navbar expand='lg' sticky='top' className='nav-bg'>

          <img src={logo_1} alt="foto"  className='nav-logo-img' />
 
        <Container>
          <Navbar.Brand to={"/"} as={Link} className='nav-home'>
          <span>HOME-11 </span> 
           Werkstatt
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link to={'/doctors'} as={Link}>
                Über Uns
              </Nav.Link>
              <Nav.Link to={"/admin-dashboard"} as={Link}>
                Admin
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title='Account' id='basic-nav-dropdown'>
                <NavDropdown.Item to={"/user-dashboard"} as={Link}>
                  Register
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to={"/user-dashboard"} as={Link}>
                  Login
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to={"/user-dashboard"} as={Link}>
                  Mein Dashboard
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to={"/admin-dashboard"} as={Link}>
                  Admin Dashboard
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to={"/logout"} as={Link}>
                  Ausloggen
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    );
}

export default NavBar;
