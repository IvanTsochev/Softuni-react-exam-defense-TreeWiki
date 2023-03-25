import styles from './Home.module.css';

export const Home = () => {
    return (
    <main>
        <div className={styles.main}>
            <h1>Welcome to My Simple Home Page!</h1>
            <div className={styles.imgContainer}>
                <img src="https://dummyimage.com/600x400/008000/ffffff&text=Image+1" alt="aaa" />
                <img src="https://dummyimage.com/600x400/008000/ffffff&text=Image+2" alt="aaa" />
            </div>
            <p>Here is some more text. Lorem ipsum dolor sit amet, consectetur</p>
        </div>
    </main>
    )
}