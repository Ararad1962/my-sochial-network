import React from "react"
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
   let path = "/Dialogs/" + props.id;
   return (
      <div className={s.dialogItem}>
         <NavLink to={path} className={
            ({ isActive }) => isActive ? s.activeDialog : undefined
         }>{props.name}</NavLink>
      </div>
   )
}
const Message = (props) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}


const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <DialogItem id="1" name="Женя" />
            <DialogItem id="2" name="Сергей" />
            <DialogItem id="3" name="Валера" />
            <DialogItem id="4" name="Артур" />
            <DialogItem id="5" name="Миша" />
            <DialogItem id="6" name="Арут" />

         </div>


         <div className={s.usersDialogs}>
            <Message message="Hello" />
            <Message message="How is your sochial network? " />
            <Message message="It's create!" />

         </div>
      </div>
   )
};

export default Dialogs;