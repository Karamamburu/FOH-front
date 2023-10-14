import axios from 'axios';

const BASE_URL = 'http://localhost:3500/get_random_order';

const api = axios.create({
  baseURL: BASE_URL,
});

export const get = async (url: string) => {
    const response = await api.get(url);

    return response.data;
}

export default api;
