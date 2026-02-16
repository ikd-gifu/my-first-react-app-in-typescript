import React, { useReducer } from 'react'; // useReducerは型定義を5つ持つ
// 適切な型定義を、dispatchにホバーして確認する
//     function useReducer<R extends Reducer<any, any>>(
//         reducer: R,
//         initialState: ReducerState<R>,
//         initializer?: undefined
//     ): [ReducerState<R>, Dispatch<ReducerAction<R>>];

const initialState = {count: 0};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState); // const dispatch: React.Dispatch<any>
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default CounterWithReducer;
// https://ja.legacy.reactjs.org/docs/hooks-reference.html#usereducer
