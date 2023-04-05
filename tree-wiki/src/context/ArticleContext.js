import { useEffect, useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { articleServiceFactory } from "../services/treeArticle";
import { AuthContext } from "./AuthContext";

export const ArticleContext = createContext();

export const ArticleProvider = ({
    children,
}) => {
    const { token, username } = useContext(AuthContext);
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();
    const articleService = articleServiceFactory(token);

    useEffect(() => {
        articleService.getAll()
            .then(result => {
                setArticles(result)
            })
    }, []);

    const onCreateArticleSubmit = async (data) => {
        const newArticle = await articleService.create({...data, publisher: username});
        
        setArticles(state => [...state, newArticle]);

        navigate('/catalog');
    };

    const onEditArticleSubmit = async (values) => {
        const result = await articleService.edit(values._id, values);

        setArticles(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    }

    const deleteArticle = (articleId) => {
        setArticles(state => state.filter(article => article._id !== articleId));
    };

    const contextValues = {
        articles,
        onCreateArticleSubmit,
        onEditArticleSubmit,
        deleteArticle,
    };

    return (
        <ArticleContext.Provider value={contextValues}>
            {children}
        </ArticleContext.Provider>
    );
};