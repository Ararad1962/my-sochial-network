import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

   let PostsElements = props.Posts.map(post => <Post message = {post.message} likesCount = {post.likesCount} />);
  
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
           {
              PostsElements
           }
         </div>
      </div>
   );
};

export default MyPosts;