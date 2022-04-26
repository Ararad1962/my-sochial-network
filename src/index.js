

import state from './Redux/state';
import { rerenderEntireTree } from './render';


// import { BrowserRouter } from 'react-router-dom';


rerenderEntireTree(state);

//React 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

