import axios from 'axios';
import { CONFIG } from "../components/Config";

axios.defaults.withCredentials = true;

export const GetStats = async (id) => {
    let config = {
        method: 'GET',
        url: `http${ CONFIG.scheme }://${ CONFIG.host }/game/stats`,
    };
    return axios(config)
        .catch(error => error.response)
};

export const Health = async () => {
    let config = {
        method: 'GET',
        url: `http${ CONFIG.scheme }://${ CONFIG.host }/health`,
    };
    return axios(config)
        .catch(error => error.response)
};
