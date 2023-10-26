import React from 'react';
import { fetchData, OrderItem } from '../api';
import GetOrderButton from './getOrderButton';
import OrderList from './productList';

interface SidebarProps {
  data: OrderItem[] | null;
  setData: React.Dispatch<React.SetStateAction<OrderItem[] | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<SidebarProps> = ({ data, setData, setLoading }) => {
  const getData = async () => {
    await fetchData(setData, setLoading);
  };

  return (
    <div className="sidebar">
      <GetOrderButton onClick={getData} />
      <OrderList data={data} />
    </div>
  );
};

export default Sidebar;