import React from 'react';
import s from './my-profile.module.css'
import MyPosts from './MyPosts/MyPosts';


const MyProfile = () => {
   return (

      <div className={s.myProfile}>
         <div>
            <img className='img-content' alt='someone' src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
         </div>
         <div>
            ava+description
         </div>
         <MyPosts />

      </div>
   );
};

export default MyProfile;