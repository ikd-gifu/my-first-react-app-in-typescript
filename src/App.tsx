import React from 'react';

interface AppProps {
  message: string;
}

// 渡されたmessage属性をpropsで受け取る
// propsから分割代入でmessageを取り出す
// const App = ({ message }: { message: string }) => { // 関数コンポーネント。最終的にHTMLを返す部分
// {} を付ける理由は「JSの値や式をJSXの中に埋め込む」ため
const App = ({ message }: AppProps) => {
  return <div>{message}</div>; // JSXという特殊なフォーマットのJavaScript。トランスパイルされてHTMLになり、ブラウザに表示される
};

export default App;
