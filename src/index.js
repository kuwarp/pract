import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <div>
  //   <h2>hello my coder</h2>
  //   <ul>
  //     <li >
  //       code
  //     </li>
  //     <li>
  //       code again
  //     </li>
  //     <li>
  //       code again and again until you get you points
  //     </li>
  //   </ul>
  // </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// 