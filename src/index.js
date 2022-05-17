

import store from './Redux/redux-store';
// import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {

   root.render(
      
      <React.StrictMode>

         <App 
         store = {store}
         state={state} 
         dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>
   );
}

reportWebVitals();
rerenderEntireTree(store.getState());
store.subscribe( ()=> {
   let state = store.getState();
   rerenderEntireTree (state);
});
