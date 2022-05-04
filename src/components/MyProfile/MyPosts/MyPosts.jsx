import React from 'react';
// import { addPost } from '../../../Redux/state';
import style from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

   let PostsElements = props.Posts.map(post => <Post message = {post.message}
                                                   likesCount = {post.likesCount} />);
   
   let newPostElement = React.createRef();

   const addNewPost = () => {
      debugger;
      // let newPostContent = newPostElement.current.value;
      props.addPost();
   }
   let onNewPost = () => {
      let text = newPostElement.current.value
      props.updateNewPostText (text);

   }

   return (
      <div className={style.postBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea onChange={onNewPost}
                  ref={newPostElement}
                  value = {props.newPostText}/>
            </div>
            <div>
               <button onClick={addNewPost}>Add New Post</button>
            </div>
         </div>
         <div className={style.item}>
           {
              PostsElements
           }
         </div>
      </div>
   );
};

export default MyPosts;