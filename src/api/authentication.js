import { SERVER_ADDRESS } from ".";

export const login = (userName, password) => {
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
                    username: userName,
                    password: password
                })
        })
            .then( res => res.json())
    } catch (error) {
        console.error(error);
    }
};


/**
 * to register an user
 */
export const register = (firstName, lastName, userName, email, password) => {
    try {
        const baseUrl = SERVER_ADDRESS + "/api/v1/auth/register";
        return fetch(baseUrl, {
            method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: "cors",
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    username: userName,
                    email,
                    password,
                })
        })
            .then(res => res.json())
    } catch (error) {
        console.error(error);
    }
}