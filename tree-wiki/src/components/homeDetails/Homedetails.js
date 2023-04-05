import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { treeServiceFactory } from "../../services/treeService";

import styles from "./HomeDetails.module.css";

export const HomeDetails = () => {
    const {treeId} = useParams();
    const [tree, setTree] = useState({});

    const treeService = treeServiceFactory();

    useEffect(() => {
        treeService.getOne(treeId)
            .then(result => {
                setTree(result);
            })
    }, [treeId]);

    return (
        <div className={styles.detailsContainer}>
            <h2 className={styles.detailsTitle}>{tree.title}</h2>
            <div className={styles.detailsImageContainer}>
                <img src={tree.imgURL} alt="aaa" className={styles.detailImage}/>
            </div>
            <p className={styles.detailsInfo}>{tree.info}</p>
        </div>
    );
};