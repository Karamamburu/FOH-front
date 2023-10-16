import URL from './const.ts';
import axios from 'axios';

const api = axios.create({
  baseURL: URL.getRandomOrder,
});

export const get = async (url: string) => {
    const response = await api.get(url);

    return response.data;
}

export default api;
