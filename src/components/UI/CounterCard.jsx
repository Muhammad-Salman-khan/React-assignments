import React, { useState } from "react";
import Counter from "../Counter";

const CounterCard = () => {
  const [count, setCount] = useState(0);
  const Increase = () => {
    if (count === 10) return alert(`Count Reached ${count}`);
    setCount((e) => e + 1);
  };
  const Decrease = () => {
    setCount((e) => e - 1);
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <div className="flex justify-center align-middle item center max-w-screen min-h-screen ">
      <Counter
        Increase={Increase}
        Decrease={Decrease}
        Reset={Reset}
        Count={count}
      />
    </div>
  );
};

export default CounterCard;
