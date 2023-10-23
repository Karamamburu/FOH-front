import { useState } from 'react';
import './App.css';
import { get } from './api';
import GetOrderButton from './components/getOrderButton';
import OrderList from './components/productList';

interface OrderItem {
  name: string;
}

function App() {
  const [data, setData] = useState<OrderItem[] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
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

  return (
    <div>
      <GetOrderButton onClick={fetchData} />
      {loading ? (
        <p>Получение заказа...</p>
      ) : data ? (
        <OrderList data={data} />
      ) : (
        <p>Заказ отсутствует</p>
      )}
    </div>
  );
}

export default App;
