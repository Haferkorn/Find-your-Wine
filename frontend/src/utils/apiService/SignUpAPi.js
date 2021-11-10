import axios from "axios";

export function signUp(credentials){

    return axios
        .post('/auth/createUser',credentials )
        .then(response => response.data)
        .catch(console.error)
}