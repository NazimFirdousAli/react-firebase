import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import AddIcon from "../../assests/add.svg";

import logo from "../../assests/logo.png";

function NavbarMain() {
  return (
    <Navbar className="mainNavBar" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ alignItems: "center" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <NavDropdown
              title="Elements"
              id="basic-nav-dropdown"
              className="navbarCollapse"
            >
              <div>
                <NavDropdown.Item href="/category/food">Food</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/category/clothes">
                  Dress
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item href="/category/belts">
                  Belts
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/category/shoes">
                  Shoes
                </NavDropdown.Item>
              </div>
              <div>
                <NavDropdown.Item href="/category/health-care">
                  Health care
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/category/others">
                  Others
                </NavDropdown.Item>
              </div>
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="/add-items">
              {/* ADD */}
              <img
                style={{
                  width: "40px",
                  alignItems: "center",
                  alignContent: "center",
                }}
                src={AddIcon}
                alt="Add"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
