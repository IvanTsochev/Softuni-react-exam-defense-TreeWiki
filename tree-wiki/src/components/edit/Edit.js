import { useForm } from '../../hooks/useForm';
import { useParams } from "react-router-dom";
import { useContext, useEffect } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { articleServiceFactory } from '../../services/treeArticle';

import styles from './Edit.module.css';
import { ArticleContext } from '../../context/ArticleContext';

const EditFormKeys = {
    Title: 'title',
    Info: 'info',
    ImgURL: 'imgURL'
};

export const Edit = () => {
    const { token } = useContext(AuthContext);
    const { onEditArticleSubmit } = useContext(ArticleContext);
    const { articleId } = useParams();
    const articleService = articleServiceFactory(token);

    const {values, changeHandler, onSubmit, changeValues} = useForm({
        [EditFormKeys.Title] : '',
        [EditFormKeys.Info] : '',
        [EditFormKeys.ImgURL] : '',
    }, onEditArticleSubmit);

    useEffect(() => {
        articleService.getOne(articleId)
            .then(result => {
                changeValues(result);
            });
    }, [articleId]);

    return (
        <div>
            <h1>Edit</h1>

            <form method='POST' className={styles.editForm} onSubmit={onSubmit}>
                <label htmlFor="title">Title:</label>
                <input 
                type="text" 
                id="title" 
                name={EditFormKeys.Title} 
                value={values[EditFormKeys.Title]}
                onChange={changeHandler}
                required
                minLength="3"
                />

                <label htmlFor="info">Information:</label>
                <textarea 
                id="info" 
                name={EditFormKeys.Info} 
                value={values[EditFormKeys.Info]}
                onChange={changeHandler}
                required
                minLength="5">
                </textarea>

                <label htmlFor="imgURL">Photo URL:</label>
                <input 
                type="text" 
                id="imgURL" 
                name={EditFormKeys.ImgURL}
                value={values[EditFormKeys.ImgURL]}
                onChange={changeHandler}
                required
                minLength="8"
                />

                <button type="submit">Edit</button>
            </form>
        </div>
    )
};