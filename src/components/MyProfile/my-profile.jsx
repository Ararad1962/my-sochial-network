import React from 'react';
import s from './my-profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const MyProfile = (props) => {
   
   return (

      <div className={s.myProfile}>
         <ProfileInfo />
         <MyPosts Posts = {props.posts.PostData}/>

      </div>
   );
};

export default MyProfile;