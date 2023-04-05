import { Link } from 'react-router-dom';

import styles from '../Home.module.css';

export const HomeItem = ({
    _id,
    title,
    imgURL,
}) => {
    return (
        <div className={styles.CatalogEntity}>
            <img src={imgURL} alt="Tree picture" className={styles.CatalogImage} />
            <h3 className={styles.CatalogEntityTitle}>{title}</h3>
            <Link to={`/home/${_id}`} className={styles.CatalogEntityButton}>Read</Link>
        </div>
    );
}