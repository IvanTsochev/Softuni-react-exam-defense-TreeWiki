import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';

import './Login.module.css';

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
            <form onSubmit={onSubmit}>
                <h1>Login</h1>

                <input 
                    type="text" 
                    name={LoginFormKeys.Email} 
                    placeholder="Email"
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}
                />

                <input 
                    type="password" 
                    name={LoginFormKeys.Password} 
                    placeholder="Password"
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler} 
                />

                <input type="submit" value="Login" />
            </form>
        </div>
    )
};