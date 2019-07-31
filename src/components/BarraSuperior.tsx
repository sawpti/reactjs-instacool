import * as React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap/';
// import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faRegistered, faNewspaper} from '@fortawesome/free-solid-svg-icons'

export default class BarraSuperior extends React.Component {
  public render() {
    return (
      <div>
       
        <Navbar collapseOnSelect={true} expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/app/newsfeed"> <FontAwesomeIcon icon={faNewspaper} />  Instacool</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="/app/profile"> <FontAwesomeIcon icon={faUser} />  Perfil</Nav.Link>
              <Nav.Link href="/"> <FontAwesomeIcon icon={faLock} /> Iniciar sesión</Nav.Link>
              <Nav.Link href="/registro"> <FontAwesomeIcon icon={faRegistered} /> Registrarse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
