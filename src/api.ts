import axios from 'axios';
import URL from './const.ts';

const api = axios.create({
  baseURL: URL.getRandomOrder,
});

const get = async (url: string) => {
  const response = await api.get(url);
  return response.data;
}

export interface OrderItem {
  name: string;
  img: string;
}

export const fetchData = async (
  setData: React.Dispatch<React.SetStateAction<OrderItem[] | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setLoading(true);
    const result = await get('http://localhost:3500/get_random_order');
    setData(result);
  } catch (error) {
    console.error('Ошибка при запросе данных:', error);
  } finally {
    setLoading(false);
  }
}