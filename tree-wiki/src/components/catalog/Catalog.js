import { CatalogItem } from './catalogItem/CatalogItem';

import styles from './Catalog.module.css';
import { useContext } from 'react';
import { ArticleContext } from '../../context/ArticleContext';

export const Catalog = () => {
    const {articles} = useContext(ArticleContext);

    return (
        <div className={styles.CatalogContainer}>
            <h2 className={styles.CatalogTitle}>Tree articles</h2>

            <div className={styles.CatalogEntities}>

                {articles.map(x => 
                    <CatalogItem key={x._id} {...x} />   
                )}

                {articles.length === 0 && (
                    <h3>No articles yet</h3>
                )}

            </div>
        </div>
    );
};