interface GetOrderButtonProps {
  onClick: () => void;
}

const GetOrderButton: React.FC<GetOrderButtonProps> = ({ onClick }) => {

  return (
    <button onClick={onClick} className="button">
      Получить заказ
    </button>
  );
};

export default GetOrderButton;