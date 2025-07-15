// src/components/Nav.js
import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/" >Home</Link ></li>
                <li><Link to="/about" >About</Link ></li>
                <li><Link to="/reservations">Reservations</Link ></li>
                <li><Link to="/onlineorder" >Online Order</Link ></li>
                <li><Link to="/login">Login</Link ></li>

            </ul>
        </nav>
    );
}

export default Nav;