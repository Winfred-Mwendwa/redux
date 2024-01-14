import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { decrement, increment, incrementAsync, incrementByAmount } from "../state/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
      <div className="counter-container">
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(20))}>Increment by 20</button>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment by 10;async</button>
      </div>
    </div>
    );
  };
  
export default Counter;