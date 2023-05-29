import React from 'react';
import "../sass/header.scss"

function Header() {
    const token = sessionStorage.getItem('Authorization');
    if (!token) {
        return (
            <nav className="container">
                <header className="header">
                    <nav className="navbar"><a href="/" className="navbar__logo">MoneyTransfer</a></nav>
                    <nav className="nav">
                        <ul>
                            <li className="btn"><a href="/">Home</a></li>
                            <li className="btn"><a href="/dialog">User Dialog</a></li>
                            <li className="btn"><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <nav className="nav">
                        <ul>
                            <li className="btn2"><a href="/login">Login</a></li>
                        </ul>
                    </nav>

                </header>
            </nav>
        );
    }
    else {
        return (
            <nav className="container">
                <header className="header">
                    <nav className="navbar"><a href="/" className="navbar__logo">MoneyTransfer</a></nav>
                    <nav className="nav">
                        <ul>
                            <li className="btn"><a href="/">Home</a></li>
                            <li className="btn"><a href="/dialog">User Dialog</a></li>
                            <li className="btn"><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <nav className="nav">
                        <ul>
                            <li className="btn2"><a href="/profile">Profile</a></li>
                            <li className="btn2"><a href="/logout">Logout</a></li>
                        </ul>
                    </nav>

                </header>
            </nav>
        );
    }
}

export default Header;








// import React from 'react';
// import { Link } from 'react-router-dom'
// import "../sass/header.scss"
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Header() {
//     const token = sessionStorage.getItem('Authorization');
//     return (
//         <Navbar bg="dark" variant="dark" expand="lg">
//             <Navbar.Brand as={Link} to="/" className="navbar__logo">MoneyTransfer</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <Nav.Link as={Link} to="/">Home</Nav.Link>
//                     <Nav.Link as={Link} to="/dialog">User Dialog</Nav.Link>
//                     <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//                 </Nav>
//                 {token ? (
//                     <Nav>
//                         <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
//                         <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
//                     </Nav>
//                 ) : (
//                     <Nav>
//                         <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                     </Nav>
//                 )}
//             </Navbar.Collapse>
//         </Navbar>
//     );
// }

// export default Header;