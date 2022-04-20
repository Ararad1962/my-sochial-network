import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById("root"));

let PostData = [
   {id: 1, message: "Hi, how are you?", likesCount: "6"},
   {id: 1, message: "I'm fine and you", likesCount: "12"},
   {id: 1, message: "Thank you all right. What are you doing?", likesCount: "9"},
   {id: 2, message: "It's my first post", likesCount: "11"}
];

let DialogsData = [
   { id: "1", name: "Jenya" },
   { id: "2", name: "Sergey" },
   { id: "3", name: "Artur" }
];
let MessageData = [
   { id: 1, message: "Hello" },
   { id: 2, message: "How is your sochial network?" },
   { id: 3, message: "It's create!" }
];
root.render(


<App Posts = {PostData} dialogs = {DialogsData} messages = {MessageData}/>


);
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
reportWebVitals();
