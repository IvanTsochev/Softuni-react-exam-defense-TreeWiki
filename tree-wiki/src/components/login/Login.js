import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';


import styles from './Login.module.css';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const {values, changeHandler, onSubmit} = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    }, onLoginSubmit);

    return (
        <div>
            <form method='POST' className={styles.login} onSubmit={onSubmit}>
                <h1>Login</h1>

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name={LoginFormKeys.Email} 
                    placeholder="pesho@abv.bg"
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}
                    required
                    minLength="5"
                />

                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    name={LoginFormKeys.Password} 
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler}
                    required
                    minLength="2"
                />

                <input type="submit" value="Login" />
            </form>
        </div>
    )
};