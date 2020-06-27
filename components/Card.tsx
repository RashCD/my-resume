const Card: React.FC = props => {
  return (
    <div className="border-solid bg-white h-auto border-0 p-3 shadow-lg rounded m-3">
      {props.children}
    </div>
  );
};

export default Card;
