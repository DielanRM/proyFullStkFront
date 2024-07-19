import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/peliculas/getAll'

function getItems() {
    return axios.get(BASE_URL)
}

export {
    getItems
}