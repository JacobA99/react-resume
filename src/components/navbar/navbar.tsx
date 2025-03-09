import React from 'react';
import Link from 'next/link';
import './navbar.css'; // Assuming you have some CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <h1 className="navbar-title">Jacob Alexander</h1>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/about">About Me</Link>
                    </li>
                    <li className="navbar-item">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;