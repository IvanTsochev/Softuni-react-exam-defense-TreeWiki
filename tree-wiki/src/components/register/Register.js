import { useContext } from 'react';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../context/AuthContext';

import styles from './Register.module.css';

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPass: 'confirmPassword',
    Gender: 'gender'
};

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPass]: '',
        [RegisterFormKeys.Gender]: '',
    }, onRegisterSubmit);

    return (
        <div>
            <form method='POST' className={styles.register} onSubmit={onSubmit}>
                <h1>Register</h1>

                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name={[RegisterFormKeys.Username]}
                    placeholder="pesho"
                    required
                    onChange={changeHandler}
                    value={values[RegisterFormKeys.Username]}
                    minLength="2"
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name={[RegisterFormKeys.Email]}
                    placeholder="pesho@abv.bg"
                    required
                    onChange={changeHandler}
                    value={values[RegisterFormKeys.Email]}
                    minLength="5"
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name={[RegisterFormKeys.Password]}
                    required
                    onChange={changeHandler}
                    value={values[RegisterFormKeys.Password]}
                    minLength="2"
                />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name={[RegisterFormKeys.ConfirmPass]}
                    required
                    minLength="2"
                    onChange={changeHandler}
                    value={values[RegisterFormKeys.ConfirmPass]}
                />

                <label >Gender:</label>
                <input
                    type="text"
                    name={[RegisterFormKeys.Gender]}
                    required
                    onChange={changeHandler}
                    placeholder="male, female, other"
                    value={values[RegisterFormKeys.Gender]}
                />

                <input type="submit" value="Register" />
            </form>
        </div>
    )
};