import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  setCounter,
  incrementByAmount,
} from '../../store/slices/counterSlice';

const Counter = () => {
  const counter: number = useSelector(
    (state: RootState) => state.counter.value
  );
  const dispatch = useDispatch();

  return (
    <div>
      <p className='pb-4'>
        Counter Value : <b>{counter}</b>
      </p>
      <div className='flex gap-x-2'>
        <button
          className='border border-blue-500 p-2'
          onClick={() => {
            dispatch(increment());
          }}
        >
          Add 1
        </button>
        <button
          className='border border-blue-500 p-2'
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Subtract 1
        </button>
        <button
          className='border border-blue-500 p-2'
          onClick={() => {
            dispatch(incrementByAmount(10));
          }}
        >
          Add 10
        </button>
        <button
          className='border border-blue-500 p-2'
          onClick={() => {
            dispatch(incrementByAmount(-10));
          }}
        >
          Subtract 10
        </button>
      </div>

      <p className='my-4'>Setting up the value is also available here</p>
      <input
        className='border border-blue-500'
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
