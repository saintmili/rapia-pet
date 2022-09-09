export const login = (id, password) => {
    try {
        const baseUrl = "http://localhost:5000/api/v1/auth/login";
        return fetch(baseUrl, {
            method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: "cors",
                body: JSON.stringify({
                    id: id,
                    password: password
                })
        })
            .then( res => res.json())
    } catch (error) {
        console.error(error);
    }
};