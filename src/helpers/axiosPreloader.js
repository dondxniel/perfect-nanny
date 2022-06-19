import axios from 'axios';

const baseUrl = "http://perfectnanny.herokuapp.com/api";

export const axiosPostPreload = (endpoint, data) => {
    return axios({
        method: 'POST',
        url: baseUrl+endpoint,
        data: {
            ...data
        }
    });
}

export const axiosGetPreload = (endpoint) => {
    return axios({
        method: 'GET',
        url: baseUrl+endpoint
    })
}