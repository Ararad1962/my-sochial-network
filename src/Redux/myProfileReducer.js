
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {   
   PostData: [
      { id: 1, message: "Hi, how are you?", likesCount: "6" },
      { id: 2, message: "I'm fine and you", likesCount: "12" },
      { id: 3, message: "Thank you all right. What are you doing?", likesCount: "9" },
      { id: 4, message: "It's my first post", likesCount: "11" }
   ],
   newPostText: 'IT-Kamasutra.com'
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {

      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
         };
         state.PostData.push(newPost);
         state.newPostText = '';
         return state;
      }

      case UPDATE_NEW_POST_TEXT: {
         state.newPostText = action.newText;
         return state;
      }

      default: {
         return state;
      }
   }
};

export const addPostActionCreator = () => ({ type: 'ADD_POST'})
export const updateNewPostTextActionCreator = (text) => ({
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text
   })

export default profileReducer;