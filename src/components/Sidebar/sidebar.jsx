import { NavLink } from 'react-router-dom';
import s from './sidebar.module.css'

const Sidebar = () => {
   return (
      <nav className={s.sidebar}>
         <div className={s.item}>
            <NavLink to ="/MyProfile" >Profile</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to ="/Dialogs">Messages</NavLink>
         </div>
         <div className={s.item}>
            <a href="#$">News</a>
         </div>
         <div className={s.item}>
            <a href="#$">Music</a>
         </div>
         <div className={s.item}>
            <a href="#$">Settings</a>
         </div>
         
      </nav>

   );
};

export default Sidebar;