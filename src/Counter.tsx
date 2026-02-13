import React, { useState } from 'react';

// SetStateActionの定義 右クリックで定義をたどれる
// type SetStateAction<S> = S | ((prevState: S) => S);
// 今回はSがnumber型なので、以下のようになる
// type MySetStateAction = number | ((prevState: number) => number);
// Dispatchの定義
// type Dispatch<A> = (value: A) => void;
// type Dispatch = (value: MySetStateAction) => void;
// type Dispatch = (value: number | ((prevState: number) => number)) => void;
// つまり、setValueは関数であり、引数に何かしらのデータまたは関数を受け付ける
// 引数のデータの型がnumber型の場合、関数の場合はその引数がnumber型であり、かつ戻り値がnumber型である制約がある

// FCはFunctionComponentの略称 型を指定しないので、{}で空オブジェクトを渡す
const Counter: React.FC<{}> = () => {
// function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  const initialValue: any = 0;
  // const setValue: React.Dispatch<React.SetStateAction<number>>
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    // setValue(value + 1); // ssetValueに値を直接渡す場合
    setValue((prev) => prev + 1)
  };

  const decrement = () => {
    // setValue(value - 1);
    setValue((prev) => prev - 1) // (parameter) prev: number
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1 </button>
    </div>
  );
};

export default Counter;

// useStateはTSだと型引数を指定できる
// stateとして指定する値に型を指定しておくと、useStateが返すデータと関数が型制約を持つものとなる
// この結果、バグを生じにくくできる
// https://legacy.reactjs.org/docs/hooks-state.html
