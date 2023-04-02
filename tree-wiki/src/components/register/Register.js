import { useContext } from 'react';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../context/AuthContext';

import styles from './Register.module.css';

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPass: 'confirmPassword'
};

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [RegisterFormKeys.Username] : '',
        [RegisterFormKeys.Email] : '',
        [RegisterFormKeys.Password] : '',
        [RegisterFormKeys.ConfirmPass] : '',
    }, onRegisterSubmit);

    return (
        <div>
            <form method='POST' className={styles.register} onSubmit={onSubmit}>
                <h1>Register</h1>

                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="pesho"
                    required
                    onChange={changeHandler}
                    value={values[RegisterFormKeys.Username]}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="pesho@abv.bg"
                    required
                    onChange={changeHandler}
                    value={values[RegisterFormKeys.Email]}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    onChange={changeHandler}
                    value={values[RegisterFormKeys.Password]}
                />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    onChange={changeHandler}
                    value={values[RegisterFormKeys.ConfirmPass]}
                />

                <input type="submit" value="Register" />
            </form>
        </div>
    )
};