import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCostumCounter,
  fetchDummy,
  fetchJSON,
} from './costumCounterSlice';

const CostumCounterAsync = () => {
  const count = useSelector(selectCostumCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <span data-testid="count-value">{count.value}</span>
      <button onClick={() => dispatch(fetchDummy(5))}>FetchDummy</button>
      {count.username && <h1>{count.username}</h1>}
      <button onClick={() => dispatch(fetchJSON())}>FetchJSON</button>
    </div>
  );
};

export default CostumCounterAsync;
