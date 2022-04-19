import s from './MyPosts.module.css'
import Post from './Post/Post';

let PostData = [
   {id: 1, message: "Hi, how are you?", likesCount: "6"},
   {id: 2, message: "It's my first post", likesCount: "11"}
];
let Posts = PostData.map(post => <Post message = {post.message} likesCount = {post.likesCount} />);
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
           {
              Posts
           }
         </div>
      </div>
   );
};

export default MyPosts;