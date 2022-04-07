import s from './my-profile.module.css'

const MyProfile = () => {
   return (
      <div className={s.myProfile}>
         <div>
            <img className='img-content' alt='someone' src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
         </div>
         <div>
            ava+description
         </div>
         <div>
            My posts
            <div>
               New post
            </div>
            <div className={s.item}>
               Post 1
            </div>
            <div className={s.item}>
               Post 2
            </div>
         </div>

      </div>
   );
};

export default MyProfile;