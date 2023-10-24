interface OrderItem {
  name: string;
}

interface OrderListProps {
  data: OrderItem[] | null;
}

const OrderList: React.FC<OrderListProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  const itemsCount: { [name: string]: number } = {};

  data.forEach((item) => {
    itemsCount[item.name] = (itemsCount[item.name] || 0) + 1;
  });

  return (
    <ul>
      {Object.keys(itemsCount).map((name) => (
        <li key={name}>
          {itemsCount[name]} {name}
        </li>
      ))}
    </ul>
  );
};

export default OrderList;
