interface GetOrderButtonProps {
  onClick: () => void; // Принимает функцию без аргументов и без возвращаемого значения
}

const GetOrderButton: React.FC<GetOrderButtonProps> = ({ onClick }) => {

  return (
    <button onClick={onClick} className="button">
      Получить закаЗ
    </button>
  );
};

export default GetOrderButton;