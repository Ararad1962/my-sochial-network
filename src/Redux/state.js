let ADD_POST = 'ADD_POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
         ]
      }
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
      if (action.type === ADD_POST) {
         let newPost = {
            id: 5,
            message: this._state.myProfilePage.newPostText,
            likesCount: 0
         };
         this._state.myProfilePage.PostData.push(newPost);
         this._state.myProfilePage.newPostText = '';
         this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.myProfilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      }
   }
}

export const addPostActionCreator = () => ({ type: 'ADD_POST'})
export const updateNewPostTextActionCreator = (text) => ({
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text
   })

window.store = store;


export default store;