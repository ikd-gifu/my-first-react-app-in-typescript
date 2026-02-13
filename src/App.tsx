import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

// 渡されたmessage属性をpropsで受け取る
// propsから分割代入でmessageを取り出す
// const App = ({ message }: { message: string }) => { // 関数コンポーネント。最終的にHTMLを返す部分
// {} を付ける理由は「JSの値や式をJSXの中に埋め込む」ため
// Reactの関数コンポーネントは、Reactが提供する型を使わないと、propsの型チェックができない
const App: React.FunctionComponent<AppProps> = ({ message }) => { // message: string
// const App = ({ message }: AppProps) => { // この指定だと、AppPropsにmessage以外を指定してもエラーにならない
  // return <div>{message}</div>; // JSXという特殊なフォーマットのJavaScript。トランスパイルされてHTMLになり、ブラウザに表示される
  return (
    <div><Counter /></div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
  // message: 123, // FC型を使わない場合、型エラーにならない
  // description: 'This is App component.' // オブジェクト リテラルは既知のプロパティのみ指定できます。'description' は型 'Partial<AppProps>' に存在しません。
};

export default App;

// 関数コンポーネントは内部的にpropsのデフォルト値を設定できる
// https://legacy.reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
// class Greeting extends React.Component {
//   static defaultProps = {
//     name: 'stranger'
//   }

//   render() {
//     return (
//       <div>Hello, {this.props.name}</div>
//     )
//   }
// }