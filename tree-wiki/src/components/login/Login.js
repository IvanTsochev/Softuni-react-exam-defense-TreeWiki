import './Login.module.css';

export const Login = () => {
    return (
        <div>
            <form>
                <h1>Login</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
};