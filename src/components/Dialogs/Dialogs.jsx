import React from "react"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

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
         </div>


         <div className={s.usersDialogs}>
            {
               MessageElements
            }
         </div>
      </div>
   )
};

export default Dialogs;