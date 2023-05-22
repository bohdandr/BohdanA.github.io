import React from 'react';
import { Link } from 'react-router-dom'
import "../sass/header.scss"

function Header() {
    const token = sessionStorage.getItem('Authorization');
    if (!token) {
        return (
            <nav class="container">
                <header class="header">
                    <nav class="navbar"><a href="/" class="navbar__logo">MoneyTransfer</a></nav>
                    <nav class="nav">
                        <ul>
                            <li class="btn"><a href="/">Home</a></li>
                            <li class="btn"><a href="/dialog">User Dialog</a></li>
                            <li class="btn"><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <nav class="nav">
                        <ul>
                            <li class="btn2"><a href="/login">Login</a></li>
                        </ul>
                    </nav>

                </header>
            </nav>
        );
    }
    else {
        return (
            <nav class="container">
                <header class="header">
                    <nav class="navbar"><a href="/" class="navbar__logo">MoneyTransfer</a></nav>
                    <nav class="nav">
                        <ul>
                            <li class="btn"><a href="/">Home</a></li>
                            <li class="btn"><a href="/dialog">User Dialog</a></li>
                            <li class="btn"><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <nav class="nav">
                        <ul>
                            <li class="btn2"><a href="/profile">Profile</a></li>
                            <li class="btn2"><a href="/logout">Logout</a></li>
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