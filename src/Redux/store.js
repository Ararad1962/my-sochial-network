import dialogsReducer from "./dialogsReducer";
import profileReducer from "./myProfileReducer";
import sidebarReducer from "./sidebarReducer";



let store = {
   _state: {
      myProfilePage: {
         PostData: [
            { id: 1, message: "Hi, how are you?", likesCount: "6" },
            { id: 2, message: "I'm fine and you", likesCount: "12" },
            { id: 3, message: "Thank you all right. What are you doing?", likesCount: "9" },
            { id: 4, message: "It's my first post", likesCount: "11" }
         ],
         newPostText: 'IT-Kamasutra.com'
      },
      dialogsPage: {
         DialogsData: [
            { id: 1, name: "Jenya" },
            { id: 2, name: "Sergey" },
            { id: 3, name: "Artur" }
         ],
         MessageData: [
            { id: 1, message: "Hello" },
            { id: 2, message: "How is your sochial network?" },
            { id: 3, message: "It's create!" }
         ],
         newMessageBody: ""
      },
      sideBar: {}
   },

   _callSubscriber () {
   },

   subscribe (observer) {
      this._callSubscriber = observer;
   },
   getState () {
      return this._state;
   },
   
   dispatch(action) {
      
      this._state.myProfilePage = profileReducer (this._state.myProfilePage, action);
      this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
      this._state.sideBar = sidebarReducer (this._state.sideBar, action);

      this._callSubscriber(this._state);

      
   }
}




window.store = store;


export default store;