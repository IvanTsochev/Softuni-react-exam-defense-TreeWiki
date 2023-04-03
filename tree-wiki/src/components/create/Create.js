import { useForm } from '../../hooks/useForm';

import styles from './Create.module.css';

const CreateFormKeys = {
    Title: 'title',
    Info: 'info',
    ImgURL: 'imgURL'
};

export const Create = ({
    onCreateArticleSubmit,
}) => {
    const {values, changeHandler, onSubmit} = useForm({
        [CreateFormKeys.Title] : '',
        [CreateFormKeys.Info] : '',
        [CreateFormKeys.ImgURL] : '',
    }, onCreateArticleSubmit);

    return (
        <div>
            <h1>Create</h1>

            <form method='POST' className={styles.createForm} onSubmit={onSubmit}>
                <label htmlFor="title">Title:</label>
                <input 
                type="text" 
                id="title" 
                name={CreateFormKeys.Title} 
                value={values[CreateFormKeys.Title]}
                onChange={changeHandler}
                required
                />

                <label htmlFor="info">Information:</label>
                <textarea 
                id="info" 
                name={CreateFormKeys.Info} 
                value={values[CreateFormKeys.Info]}
                onChange={changeHandler}
                required>
                </textarea>

                <label htmlFor="imgURL">Photo URL:</label>
                <input 
                type="text" 
                id="imgURL" 
                name={CreateFormKeys.ImgURL}
                value={values[CreateFormKeys.ImgURL]}
                onChange={changeHandler}
                required
                />

                <button type="submit">Create</button>
            </form>
        </div>
    )
};