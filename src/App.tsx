import './App.css';
import { useState } from 'react';
import { get } from './api';
import GetOrderButton from './components/getOrderButton';

interface OrderData {
  [key: string]: number;
}

function App() {
  const [data, setData] = useState<OrderData | null>(null);
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
  };

  return (
    <div>
      <GetOrderButton onClick={fetchData} />
      {loading ? (
        <p>Получение заказа...</p>
      ) : data ? (
        <div>
          <h2>Заказ</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Заказ отсутствует</p>
      )}

    </div>
  );
}

export default App;
