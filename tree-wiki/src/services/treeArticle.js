import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/treeArticles';
const likeUrl = 'http://localhost:3030/jsonstore/like';

export const articleServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const articles = Object.values(result);
    
        return articles;
    };

    const getOne = async (articleId) => {
        const result = await request.get(`${baseUrl}/${articleId}`);
        const likes = await request.get(likeUrl);

        const values = Object.values(likes);
        result.likedBy = [];

        let likesCount = 0;
        values.forEach(element => {
            if(element.articleId === articleId) {
                likesCount++;
                result.likedBy.push(element.userId);
            };
        });

        result.like = likesCount;
        return result;
    };

    const create = async (articleData) => {
        const result = await request.post(baseUrl, articleData);

        return result;
    };

    const like = async (articleId, userId) => {
        const likeData = {
            articleId: articleId,
            userId: userId
        };

        await request.post(likeUrl, likeData);
    }

    const deleteArticle = async (articleId) => request.delete(`${baseUrl}/${articleId}`);

    const edit = async (articleId, data) => request.put(`${baseUrl}/${articleId}`, data);

    return {
        create,
        getAll,
        getOne,
        delete: deleteArticle,
        edit,
        like,
    };
};