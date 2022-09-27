import './components.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagenes from '../resources/Imagenes';
import { Link } from 'react-router-dom';

function NavbarApp() {
  return (
    <Navbar style={{fontFamily: 'PokemonGB', fontSize: '16px', backgroundColor: '#FF2E2E'}} expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={Imagenes.icono} style={{width: '40px', marginRight: '12px'}}></img>LlamosaDex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{marginLeft: '20px'}} id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" ><Nav.Link style={{marginLeft: '16px',color: 'white', textDecoration: 'none'}} className="opcionesnav" href="#home">Inicio</Nav.Link></Link>
            <Link to="/Pokemons" ><Nav.Link style={{marginLeft: '16px',color: 'white', textDecoration: 'none'}} className="opcionesnav" href="#link">PokeDex</Nav.Link></Link>
            <Link to="/About"><Nav.Link style={{marginLeft: '16px',color: 'white', textDecoration: 'none'}} className="opcionesnav" href="#link">Acerca de mi</Nav.Link></Link>

            <NavDropdown title="Mas Contenido" className="text-light" id="basic-nav-dropdown">
              <ul>
                <li><Link style={{marginLeft: '16px',color: 'black', textDecoration: 'none'}} to="/Regions">Regiones</Link></li>
                <li><Link style={{marginLeft: '16px',color: 'black', textDecoration: 'none'}} to="/Items">Items</Link></li>
                <li><Link style={{marginLeft: '16px',color: 'black', textDecoration: 'none'}} to="/Berries">Bayas</Link></li>
              </ul>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;