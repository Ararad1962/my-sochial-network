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
   { id: "1", name: "Jenya" },
   { id: "2", name: "Sergey" },
   { id: "3", name: "Artur"}
];
let MessageData = [
   { id: 1, message: "Hello" },
   { id: 2, message: "How is your sochial network?" },
   { id: 3, message: "It's create!" }
];

let DialogsElements = DialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
let MessageElements = MessageData.map(phrase => <Message message={phrase.message} />);

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>

            {
               DialogsElements
            }
            {/* <DialogItem id={DialogsData[0].id} name={DialogsData[0].name} />
            <DialogItem id={DialogsData[1].id} name={DialogsData[1].name} /> */}
         </div>


         <div className={s.usersDialogs}>
            {
               MessageElements
            }
            {/* <Message message={MessageData[0].message} />
            <Message message={MessageData[1].message} />
            <Message message={MessageData[2].message} /> */}
         </div>
      </div>
   )
};

export default Dialogs;