import React, { useReducer } from 'react'; // useReducerは型定義を5つ持つ
// 適切な型定義を、dispatchにホバーして確認する
//     function useReducer<R extends Reducer<any, any>>(
//         reducer: R,
//         initialState: ReducerState<R>,
//         initializer?: undefined
//     ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
// Rはreducerと互換性がある。ReducerStateは状態の型
// type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
// Sはreducerの第一引数の型で、戻り値の型と同じ
// type React.Reducer<S, A> = (prevState: S, action: A) => S

type StateType = { count : number };
const initialState: StateType = {count: 0};

type ActionType = { type : 'increment' | 'decrement' | 'reset'};

function reducer(state: StateType, action: ActionType): StateType | never {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset': // ActionTypeにresetを追加すれば、''だけでresetを補完してくれる
      return initialState; // {count: 0}を返す
    default:
      throw new Error();
      // エラーの場合戻り値が無い。これを表すために、戻り値の型にneverを追加する。neverは、決して値が返されないことを表す型
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState); // const dispatch: React.Dispatch<any>
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
      {/* Count: {state.count} */}
      {/* StateTypeを定義しているので、state.countと書くと、countプロパティが存在することがわかる */}
    </>
  );
}

export default CounterWithReducer;
// https://ja.legacy.reactjs.org/docs/hooks-reference.html#usereducer
