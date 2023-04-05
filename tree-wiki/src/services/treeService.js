const baseUrl = 'http://localhost:3030/jsonstore/trees';

export const treeServiceFactory = () => {
    const getAllTrees = async () => {
        let result = [];

        await fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            result = Object.values(data);
        })
        .catch(error => console.error(error));
       
        return result;
    };

    const getOne = async (treeId) => {
        let result = [];
        
        await fetch(`${baseUrl}/${treeId}`)
        .then(response => response.json())
        .then(data => {
            result = data;
        })
        .catch(error => console.error(error));

        return result;
    };

    return {
        getAllTrees,
        getOne,
    };
};


