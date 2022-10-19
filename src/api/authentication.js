import { SERVER_ADDRESS } from ".";

export const login = (id, password) => {
    try {
        const baseUrl = SERVER_ADDRESS + "/api/v1/auth/login";
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