import React, { useState } from "react";
import "../components/CounterHome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types"; // Changed to import PropTypes

const CounterHome = (props) => {
   return (
    <>
      <div className="d-flex flex-row justify-content-center">
        <div>
          <button className="plusone" onClick={() => props.increment(props.by)}>
            +{props.by}
          </button>
        </div>

        <div>
          <button className="plusone" onClick={() => props.decrement(props.by)}>
            -{props.by}
          </button>
        </div>
      </div>
    </>
  );
};

const Counter = () => {
  let [count, setCount] = useState(0);

  let increment = (by) => {
    setCount(count + by);
  };

  let decrement = (by) => {
    setCount(count - by);
  };

  let reset = () => {
    setCount(0);
  };

  return (
    <>
      <span>{count}</span>
      <CounterHome by={1} increment={increment} decrement={decrement} />
      <CounterHome by={2} increment={increment} decrement={decrement} />
      <CounterHome by={3} increment={increment} decrement={decrement} />
      <button className="plusone" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};

export default Counter;
