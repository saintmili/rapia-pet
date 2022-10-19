import { SERVER_ADDRESS } from ".";

export const getAllArticles = () => {
    try {
        const baseUrl = SERVER_ADDRESS + "/api/v1/articles";
        return fetch(baseUrl, {
            method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
        })
            .then( res => res.json())
    } catch (error) {
        console.error(error);
    }
};
