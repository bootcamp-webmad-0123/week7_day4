import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>
            <Container>
                <Navbar.Brand href="#home">Coasters App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </Link>
                        <Link to="/galeria">
                            <Nav.Link as="span">Galeria</Nav.Link>
                        </Link>
                        <Link to="/crear">
                            <Nav.Link as="span">Crear montaña</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation