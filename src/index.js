

// import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import store from './Redux/redux-store';
import reportWebVitals from './reportWebVitals';
import StoreContext from './StoreContext'



const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = () => {

   root.render(

      <React.StrictMode>
         <StoreContext.Provider value={store}>
            <App
               // store={store}
               // state={state}
               // dispatch={store.dispatch.bind(store)} 
               />
         </StoreContext.Provider>
      </React.StrictMode>
   );
}

reportWebVitals();
rerenderEntireTree(store.getState());
store.subscribe(() => {
   let state = store.getState();
   rerenderEntireTree(state);
});
