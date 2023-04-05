import { Link } from 'react-router-dom';

import styles from './404.module.css';

export const PageNotFound = () => {
    return (
        <div className={styles.ErrorContainer}>
            <h2 className={styles.ErrorTitle}>Oops! Page not found.</h2>
            <p className={styles.ErrorText}>We're sorry, the page you requested could not be found. Please check the URL or try again later.</p>
            <Link to={"/"} className={styles.ErrorButton}>Go back to Home Page</Link>
        </div>
    );
};