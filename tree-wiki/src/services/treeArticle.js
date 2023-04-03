import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/treeArticles';

export const articleServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const articles = Object.values(result);
    
        return articles;
    };

    const getOne = async (articleId) => {
        const result = await request.get(`${baseUrl}/${articleId}`);
    
        return result;
    };

    const create = async (articleData, name) => {
        const result = await request.post(baseUrl, articleData);
    
        console.log(result);
    
        return result;
    };

    const deleteArticle = async (articleId) => {
        await request.delete(`${baseUrl}/${articleId}`);
    };

    const edit = async (articleId, data) => {
        await request.put(`${baseUrl}/${articleId}`, data);
    };

    return {
        create,
        getAll,
        getOne,
        delete: deleteArticle,
        edit,
    };
};