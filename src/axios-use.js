import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hamburger-order-726eb.firebaseio.com/'
});

export default instance;