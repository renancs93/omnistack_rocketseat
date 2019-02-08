import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3000', // emulador do android
    //baseURL: 'http://localhost:3000', //caso o emulador fosse do IOS
});

export default api;