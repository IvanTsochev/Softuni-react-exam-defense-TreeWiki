import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import './Header.module.css'

export const Header = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>

                    {isAuthenticated && (
                        <div>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/create-article">Create</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </div>
                    )}

                    {!isAuthenticated && (
                        <div>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </div>
                    )}
                </ul>
            </nav>
        </header>
    )
};