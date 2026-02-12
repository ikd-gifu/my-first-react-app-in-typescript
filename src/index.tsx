import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // コンポーネント。HTMLを表示するためのもの

// type Foo = JSX.IntrinsicAttributes;
    // interface Attributes { // JSXで使う属性の型を定義するインターフェース
    //     key?: Key;
    // }

// propsでコンポーネントに属性を渡す
// 文字列リテラル以外は{}で囲み、式として渡す。JSの値を渡せる
ReactDOM.render(<App />, document.getElementById('root'));
// 'root'というIDを持つHTML要素に、<App />コンポーネントによって生成されたHTMLを差し込む
// public/index.html内にある<div id="root"></div>が対象
