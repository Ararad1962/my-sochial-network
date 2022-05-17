import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/myProfileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

   let state = props.store.getState();
   
   const addNewPost = () => {
      props.store.dispatch(addPostActionCreator());
   };
   const onNewPost = (text) => {
      let action = updateNewPostTextActionCreator(text)
      props.store.dispatch(action);

   };

   return (
      <MyPosts updateNewPostText = {onNewPost} 
               addPost = {addNewPost}
               Posts = {state.myProfilePage.PostData}
               newPostText = {state.myProfilePage.newPostText}
                />
   );
};

export default MyPostsContainer;