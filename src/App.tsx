import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

interface OrderItem {
  name: string;
  img: string;
}

function App() {
  const [data, setData] = useState<OrderItem[] | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className='menu'>
      <Sidebar data={data} setData={setData} setLoading={setLoading} />
      {loading ? (
        <p>Получение заказа...</p>
      ) : data ? (
        <div>
          {/* Остальная часть вашего компонента */}
        </div>
      ) : (
        <p>Заказ пока отсутствует</p>
      )}
    </div>
  );
}

export default App;