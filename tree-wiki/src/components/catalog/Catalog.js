import { CatalogItem } from './catalogItem/CatalogItem';

import styles from './Catalog.module.css';

export const Catalog = ({
    articles
}) => {
    return (
        <div className={styles.CatalogContainer}>
            <h2 className={styles.CatalogTitle}>Three articles</h2>

            <div className={styles.CatalogEntities}>

                {articles.map(x => 
                    <CatalogItem key={x._id} {...x} />   
                )}

                {articles.lenght === 0 && (
                    <h3>No articles yet</h3>
                )}

            </div>
        </div>
    );
};