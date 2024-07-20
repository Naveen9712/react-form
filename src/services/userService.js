import axios from 'axios';

const API_URL = 'https://backend-form-nslm.onrender.com/api/users';

const createUser = (userData) => {
    return axios.post(API_URL, userData);
};

export default {
    createUser,
};
