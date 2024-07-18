import axios from 'axios';

    const API_URL = 'http://localhost:5000/api/users';

    const createUser = (userData) => {
        return axios.post(API_URL, userData);
    };

    export default {
        createUser,
    };