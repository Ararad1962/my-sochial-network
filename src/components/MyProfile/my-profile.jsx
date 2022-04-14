import React from 'react';
import s from './my-profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const MyProfile = () => {
   return (

      <div className={s.myProfile}>
         <ProfileInfo />
         <MyPosts />

      </div>
   );
};

export default MyProfile;