import { Link } from 'react-router-dom';

import './Header.module.css'

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/create-tree">Create</Link></li>
                </ul>
            </nav>
        </header>
    )
};