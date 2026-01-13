import React from "react";

const Counter = ({ Increase, Decrease, Reset, Count }) => {
  return (
    <div className="flex items-center gap-4 justify-center">
      <button
        disabled={Count < 1}
        onClick={Decrease}
        id="decrement-btn"
        className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12H4"
          ></path>
        </svg>
      </button>
      <span id="counter" className="text-4xl font-bold mx-4">
        😊{Count}
      </span>
      <button
        onClick={Increase}
        id="increment-btn"
        className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v12M6 12h12"
          ></path>
        </svg>
      </button>
      <button
        onClick={Reset}
        id="increment-btn"
        className="flex justify-center items-center p-3
         h-10 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600"
      >
        ↺ Reset
      </button>
    </div>
  );
};

export default Counter;
