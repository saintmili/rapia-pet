export const getAllArticles = () => {
    try {
        const baseUrl = "http://localhost:5000/api/v1/articles";
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
