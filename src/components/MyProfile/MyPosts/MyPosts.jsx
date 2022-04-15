import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = (props) => {
   
   return (
      <div className={s.postBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add New Post</button>
            </div>
         </div>
         <div className={s.item}>
           <Post message = "Hi, how are you?" likesCount = "5" />
           <Post message = "It's my first post" likesCount = "10" /> 
         </div>
      </div>
   );
};

export default MyPosts;