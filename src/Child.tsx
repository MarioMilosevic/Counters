
const Child = ({ count }: { count: number }) => {
  return (
    <div className="childDiv">
      <button>+</button>
      <h2>{count}</h2>
      <button>-</button>
    </div>
  );
};

export default Child;
