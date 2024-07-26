import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/users'


const getUser = (token) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',        
        },
    }
    return axios.get(`${BASE_URL}/users/me`, config)
}
export {
    getUser
}