import styles from './Details.module.css';

export const Details = () => {
    return (
        <div className={styles.detailsContainer}>
            <h2 className={styles.detailsTitle}>Title of the Details Page</h2>
            <div className={styles.detailsImageContainer}>
                <img src="example-image.jpg" alt="aaa" className={styles.detailImage}/>
            </div>
            <p className={styles.detailsInfo}>Information about the details page goes here.</p>
            <div className={styles.detailsButtons}>
                <button className={styles.detailsEditButton}>Edit</button>
                <button className={styles.detailsDeleteButton}>Delete</button>
            </div>
        </div>
    );
};