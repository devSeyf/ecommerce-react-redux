import { Badge, Container, Nav, Navbar, } from "react-bootstrap";
import style from "./styles.module.css";


const { headerConainer, headerLogo, } = style;


export default function Header() {
    return (
        <header>
            <div className={headerConainer} >

                <h1 className={headerLogo} ><span>our</span> <Badge bg="info">Ecom</Badge> </h1>
                {/* Basket */}
                <Navbar

                    expand="lg" className="bg-body-tertiary"
                    bg="dark"
                    data-bs-theme="dark"

                >
                    <Container>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#categories">Categories</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>

                            </Nav>
                            <Nav  >
                                <Nav.Link href="#home">Login</Nav.Link>
                                <Nav.Link href="#categories">Register</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}
