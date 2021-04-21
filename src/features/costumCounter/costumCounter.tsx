import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCostumCounter,
  increment,
  decrement,
  incrementByAmount,
} from './costumCounterSlice';

const CostumCounter: React.FC = () => {
  const [number, setNumber] = useState(0);
  const count = useSelector(selectCostumCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Integration Test</h3>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span data-testid="count-value">{count.value}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(number | 0))}>
          IncrementByAmount
        </button>
        <input
          type="text"
          placeholder="Enter"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default CostumCounter;
