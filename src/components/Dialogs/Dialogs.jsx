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
let DialogsData = [
   {id: "1", name: "Jenya"},
   {id: "2", name: "Sergey"}
];
let MessageData = [
   {id: 1, message: "Hello"},
   {id: 2, message: "How is your sochial network?"},
   {id: 3, message: "It's create!"}
]



const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <DialogItem id={DialogsData[0].id} name={DialogsData[0].name} />
            <DialogItem id={DialogsData[1].id} name={DialogsData[1].name} />
            {/* <DialogItem id="3" name="Валера" />
            <DialogItem id="4" name="Артур" />
            <DialogItem id="5" name="Миша" />
            <DialogItem id="6" name="Арут" /> */}

         </div>


         <div className={s.usersDialogs}>
            <Message message={MessageData[0].message} />
            <Message message={MessageData[1].message} />
            <Message message={MessageData[2].message} />

         </div>
      </div>
   )
};

export default Dialogs;