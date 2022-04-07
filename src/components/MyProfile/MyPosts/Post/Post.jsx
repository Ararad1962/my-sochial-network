import s from './Post.module.css'

const Post = () => {
   return (
      <div className={s.item}>
         <img src='https://klike.net/uploads/posts/2019-12/1576662785_4.jpg' alt='ava for VK'></img>
         Post 1
         <div>
            <span>Like</span>
         </div>
      </div>

   );
};

export default Post;