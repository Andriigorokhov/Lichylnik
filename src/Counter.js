import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './counterSlice';

export function Counter() {
 
  const count = useSelector((state) => state.counter.value);
  const history = useSelector((state) => state.counter.history);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Лічильник</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{ fontSize: '24px', padding: '5px 15px' }}
        >
          -
        </button>
        <span style={{ fontSize: '24px', minWidth: '50px', textAlign: 'center' }}>
          {count}
        </span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{ fontSize: '24px', padding: '5px 15px' }}
        >
          +
        </button>
      </div>

      <hr style={{ margin: '20px 0' }} />

      <h3>Історія змін:</h3>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
        {history.map((entry) => (
          <li key={entry.id} style={{ marginBottom: '5px' }}>
            Було встановлено: **{entry.value}**
          </li>
        ))}
      </ul>
    </div>
  );
}