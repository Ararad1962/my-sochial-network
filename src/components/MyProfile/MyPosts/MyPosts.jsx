import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = (props) => {
   
   return (
      <div>
         My posts
         <div>
            New post
         </div>
         <div className={s.item}>
           <Post message = "Hi, how are you?" likesCount = "5" />
           <Post message = "It's my first post" likesCount = "10" /> 
         </div>
      </div>
   );
};

export default MyPosts;