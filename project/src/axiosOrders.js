import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c4dae.firebaseio.com/'
});

export default instance;