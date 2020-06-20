import axios from 'axios';

const API_ENDPOINT = 'http://127.0.0.1:1337';

export default axios.create({
    baseURL: API_ENDPOINT,
});
