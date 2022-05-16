import {combineReducers, createStore} from "redux";
import profileReducer from './myProfileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';


let reducers = combineReducers ({
   myProfilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sideBar:sidebarReducer
});

let store = createStore(reducers);

export default store;
