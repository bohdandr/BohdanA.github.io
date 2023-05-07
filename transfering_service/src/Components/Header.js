import React from 'react';
import {Link} from 'react-router-dom'
import "../sass/header.scss"

function Header() {
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
                        <li class="btn2"><a href="/logout">Logout</a></li>
                    </ul>
                </nav>

            </header>
        </nav>
    );
}

export default Header;