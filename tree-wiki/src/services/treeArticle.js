import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/treeArticles';

export const articleServiceFactory = (token) => {
    const request = requestFactory(token);

    const create = async (articleData, name) => {
        const result = await request.post(baseUrl, articleData);
    
        console.log(result);
    
        return result;
    };

    return {
        create,
    };
};