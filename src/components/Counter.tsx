import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  setCounter,
  incrementByAmount,
} from '../store/slices/counterSlice';

const Counter = () => {
  const counter: number = useSelector(
    (state: RootState) => state.counter.value
  );
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        Counter Value : <b>{counter}</b>
      </p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Subtract 1
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        Add 10
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(-10));
        }}
      >
        Subtract 10
      </button>
      <p>Setting up the value is also available here</p>
      <input
        type='number'
        value={counter}
        onChange={(e) => {
          const newValue = e.target.value;
          dispatch(setCounter(parseFloat(newValue)));
        }}
      />
    </div>
  );
};

export default Counter;
