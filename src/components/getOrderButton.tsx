interface GetOrderButtonProps {
  onClick: () => void; // Принимает функцию без аргументов и без возвращаемого значения
}

const GetOrderButton: React.FC<GetOrderButtonProps> = ({ onClick }) => {

  return (
    <button onClick={onClick}>
      Нажми меня
    </button>
  );
};

export default GetOrderButton;