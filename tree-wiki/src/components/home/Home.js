import { useState, useEffect } from 'react';

import { HomeItem } from './homeItem/HomeItem';
import { treeServiceFactory } from '../../services/treeService';

import styles from './Home.module.css';

export const Home = () => {
    const [trees, setTrees] = useState([]);

    const treeService = treeServiceFactory();

    useEffect(() => {
        treeService.getAllTrees()
            .then(result => {
                setTrees(result)
            })
    }, []);

    return (
        <div>
            <div className={styles.main}>
                <h1>Welcome to TreeWiki</h1>
            </div>

            <div className={styles.main}>
                {trees.map(x =>
                    <HomeItem key={x._id} {...x} />
                )}

                {trees.length === 0 && (
                    <h3>No trees yet</h3>
                )}
                </div>

        </div>
    )
}