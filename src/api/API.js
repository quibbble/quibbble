import axios from 'axios';

axios.defaults.withCredentials = true;

const HOST = import.meta.env.VITE_HOST

export const GetStats = async (id) => {
    let config = {
        method: 'GET',
        url: `${ HOST }/game/stats`,
    };
    return axios(config)
        .catch(error => error.response)
};

export const Health = async () => {
    let config = {
        method: 'GET',
        url: `${ HOST }/health`,
    };
    return axios(config)
        .catch(error => error.response)
};
