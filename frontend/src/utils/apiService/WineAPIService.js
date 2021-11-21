import axios from "axios";

export function getRecommendations(WineQuery){

    return axios
        .post('/recommendation', WineQuery )
        .then(response => response.data)
        .catch(console.error)
}

export function getWineBottles(FilterQuery){

    return axios
        .post('/api/filterwines', FilterQuery )
        .then(response => response.data)
        .catch(console.error)
}
