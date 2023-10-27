import React from 'react';
import { fetchData, OrderItem } from '../api';
import GetOrderButton from './GetOrderButton';
import OrderList from './OrderList';
import CondimentsList from './CondimentsList';
import extractCondiments from './util'

interface SidebarProps {
  data: OrderItem[] | null;
  setData: React.Dispatch<React.SetStateAction<OrderItem[] | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<SidebarProps> = ({ data, setData, setLoading }) => {
  const getData = async () => {
    await fetchData(setData, setLoading);
  };

  const condimentsCount = extractCondiments(data)

  return (
    <div className="sidebar">
      <GetOrderButton onClick={getData} />
      <OrderList data={data} />
      <CondimentsList data={condimentsCount} />
    </div>
  );
};

export default Sidebar;