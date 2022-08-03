import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function Header(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Template Profile</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">HOME</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about"> About</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Alert key="info" variant="info">
        <Alert.Link href="#">The notice:</Alert.Link> The website is not used
        for commercial purposes. This project is created to help people have a
        nice profile on GitHub
      </Alert>
    </div>
  );
}

export default Header;
