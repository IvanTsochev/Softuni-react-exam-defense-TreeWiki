import { Link } from 'react-router-dom';

import styles from '../Catalog.module.css';

export const CatalogItem = ({
    _id,
    title,
    imgURL,
}) => {
    return (
        <div className={styles.CatalogEntity}>
            <img src={imgURL} alt="Article photo" className={styles.CatalogImage} />
            <h3 className={styles.CatalogEntityTitle}>{title}</h3>
            <Link to={`/catalog/${_id}`} className={styles.CatalogEntityButton}>View</Link>
        </div>
    );
}