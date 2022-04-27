import { rerenderEntireTree } from '../render';

let state = {
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
}

window.state = state;

export let addPost = () => {
   let newPost = {
      id: 5,
      message: state.myProfilePage.newPostText,
      likesCount: 0
   };
   state.myProfilePage.PostData.push(newPost);
   updateNewPostText ('');
   rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
   state.myProfilePage.newPostText = newText;
   rerenderEntireTree(state);
}




export default state;