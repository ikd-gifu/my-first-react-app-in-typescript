//  function useRef<T>(initialValue: T): React.MutableRefObject<T>
// interface MutableRefObject<T> { 普通のオブジェクト
//     current: T;
// }

// (alias) function useEffect(effect: React.EffectCallback, deps?: React.DependencyList): void
// type EffectCallback = () => (void | (() => void | undefined));
// type DependencyList = ReadonlyArray<any>;
// interface ReadonlyArray<T> { TSの組み込み型で、読み取り専用の配列を表すIF
// 関数が配列を変更しないことを型レベルで保証するために使用される
import React, { useEffect, useRef, useState } from 'react';

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

// const array: Array<number> = [1, 2, 3];
// const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
// array[0] = 11;
// readonlyArray[0] = 11; // 型 'readonly number[]' のインデックス シグネチャは、読み取りのみを許可します。

// FCはFunctionComponentの略称 型を指定しないので、{}で空オブジェクトを渡す
const Counter: React.FC<{}> = () => {
// function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  const initialValue: any = 0;
  // const setValue: React.Dispatch<React.SetStateAction<number>>
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    // setValue(value + 1); // setValueに値を直接渡す場合
    setValue((prev) => prev + 1)
  };

  const decrement = () => {
    // setValue(value - 1);
    setValue((prev) => prev - 1) // (parameter) prev: number
  };

  // const renderTimes: React.MutableRefObject<number>
  const renderTimes = useRef<number>(0);
  useEffect(() => {
    // 第一引数のコールバック関数。画面が更新されるたびに実行される関数
    // renderTimes.currentを更新しても再レンダリングは起きないので、無限ループにならない
    // レンダー中に ref.current の値を読み取ったり書き込む際はuseEffect、イベントハンドラを使用することが推奨される
    renderTimes.current = renderTimes.current +1;
  });

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1 </button>
      <div>This component has re-rendered {renderTimes.current} times!</div>
    </div>
  );
};

export default Counter;

// useStateはTSだと型引数を指定できる
// stateとして指定する値に型を指定しておくと、useStateが返すデータ（value）と関数（setValue）が同じ型制約を持つものとなる
// この結果、バグを生じにくくできる
// https://legacy.reactjs.org/docs/hooks-state.html
