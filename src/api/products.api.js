export const getAllProducts = () => {
    try {
        const baseUrl = "http://localhost:5000/api/v1/products";
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

// export const getProductById = (id) => {
//     try {
//         const baseUrl = "http://localhost:5000/api/v1/products/" + id;
//         return fetch(baseUrl, {
//             method: "GET",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 }
//         })
//             .then( res => res.json())
//     } catch (error) {
//         console.error(error);
//     }
// };

export const getProductBySlug = (slug) => {
    try {
        const baseUrl = "http://localhost:5000/api/v1/products/" + slug;
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

export const deleteProductById = (id) => {
    try {
        const baseUrl = "http://localhost:5000/api/v1/products/" + id;
        return fetch(baseUrl, {
            method: "DELETE",
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