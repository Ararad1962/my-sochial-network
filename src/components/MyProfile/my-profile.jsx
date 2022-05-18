import React from 'react';
// import { addPost } from '../../Redux/state';
import style from './my-profile.module.css'
// import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPosts-Container';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const MyProfile = (props) => {
   
   return (

      <div className={style.myProfile}>
         <ProfileInfo />
         <MyPostsContainer 
            // store = {props.store}
            // dispatch = {props.dispatch} 
            // newPostText = {props.posts.newPostText} 
         />

      </div>
   );
};

export default MyProfile;