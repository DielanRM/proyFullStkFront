import axios from "axios";

// const BASE_URL = 'http://localhost:5000/api/peliculas/getAll'

// function getItems() {
//     return axios.get(BASE_URL)
// }

const BASE_URL = 'http://localhost:5000/api/peliculas'

function getItems() {
    return axios.get(`${BASE_URL}/all`)
}

const getItem = (id) => {
    return axios.get(`${BASE_URL}/${id}`)
}
export {
    getItems,
    getItem
}