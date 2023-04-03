import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { articleServiceFactory } from '../../services/treeArticle';
import { AuthContext } from '../../context/AuthContext';

import styles from './Details.module.css';

export const Details = () => {
    const { userId, token } = useContext(AuthContext);
    const { articleId } = useParams();
    const articleService = articleServiceFactory(token);
    const [article, setArticle] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        articleService.getOne(articleId)
            .then(result => {
                setArticle(result);
            })
    }, [articleId]);

    const isOwner = article._ownerId === userId;

    const onDeleteClick = async () => {
        await articleService.delete(article._id);

        navigate('/catalog');
    };

    return (
        <div className={styles.detailsContainer}>
            <h2 className={styles.detailsTitle}>{article.title}</h2>
            <div className={styles.detailsImageContainer}>
                <img src={article.imgURL} alt="aaa" className={styles.detailImage}/>
            </div>
            <p className={styles.detailsInfo}>{article.info}</p>
            <p className={styles.detailsInfo}>Publisher: {article.publisher}</p>
            {isOwner && (<div className={styles.detailsButtons}>
                <Link to={`/catalog/${article._id}/edit`} className={styles.detailsEditButton}>Edit</Link>
                <button className={styles.detailsDeleteButton} onClick={onDeleteClick}>Delete</button>
            </div>)}
            
        </div>
    );
};