import styles from './Register.module.css';

export const Register = () => {
    return (
        <div>
            <form className={styles.register}>
                <h1>Register</h1>

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" required />

                <button type="submit">Register</button>
            </form>
        </div>
    )
};