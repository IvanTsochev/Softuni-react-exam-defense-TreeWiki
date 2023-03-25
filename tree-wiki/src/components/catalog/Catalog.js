import styles from './Catalog.module.css';

export const Catalog = () => {
    return (
        <div className={styles.CatalogContainer}>
            <h2 className={styles.CatalogTitle}>Catalog Title</h2>
            <div className={styles.CatalogEntities}>
                <div className={styles.CatalogEntity}>
                    <img src="example-image-3.jpg" alt="aaa3" className={styles.CatalogImage} />
                    <h3 className={styles.CatalogEntityTitle}>Entity Title 3</h3>
                    <button className={styles.CatalogEntityButton}>Views</button>
                </div>

                <div className={styles.CatalogEntity}>
                    <img src="example-image-3.jpg" alt="aaa3" className={styles.CatalogImage} />
                    <h3 className={styles.CatalogEntityTitle}>Entity Title 3</h3>
                    <button className={styles.CatalogEntityButton}>Views</button>
                </div>
            </div>
        </div>
    );
};