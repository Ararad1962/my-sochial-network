import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/myProfileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {



   return (
      <StoreContext.Consumer> 
         {
         (store) => {
            let state = store.getState();

            const addNewPost = () => {
               store.dispatch(addPostActionCreator());
            };
            const onNewPost = (text) => {
               let action = updateNewPostTextActionCreator(text)
               store.dispatch(action);
            };
            return (
               <MyPosts updateNewPostText={onNewPost}
                  addPost={addNewPost}
                  Posts={state.myProfilePage.PostData}
                  newPostText={state.myProfilePage.newPostText}
               />
            )
         }
      }
      </StoreContext.Consumer>
   );
};

export default MyPostsContainer;