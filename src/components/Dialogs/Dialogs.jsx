import React from "react"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";





const Dialogs = (props) => {

   let DialogsElements = 
      props.dialogs.DialogsData.map(dialog =>
         <DialogItem 
            id={dialog.id} 
            name={dialog.name}
         />
      );
   let MessageElements = 
      props.dialogs.MessageData.map(phrase => 
         <Message 
            message={phrase.message}
         />
      );
   
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