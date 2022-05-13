import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {updateNewMessageBodyActCreator, sendNewMessageActCreator} from '../../Redux/state'




const Dialogs = (props) => {

   let DialogsElements = props.dialogs.DialogsData.map( dialog =>
         <DialogItem
            id={dialog.id}
            name={dialog.name}
         />
      );
   let MessageElements = props.dialogs.MessageData.map( phrase =>
         <Message
            message={phrase.message}
         />
      );
   let newMessageBody = props.dialogs.newMessageBody;

   // let newMessageElement = React.createRef();

   const onSendMessageClick = () => {
      props.dispatch(sendNewMessageActCreator());
      
   };

   const onNewMessageChange = (event) => {
      
      let text = event.target.value;
      props.dispatch(updateNewMessageBodyActCreator(text))
      
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>

            {
               DialogsElements
            }
         </div>


         <div className={s.usersDialogs}>
            <div> 
               { MessageElements }
            </div>
            <div>
               <textarea value={newMessageBody}
                         
                         onChange = {onNewMessageChange}
                         placeholder = 'Enter your message'></textarea>
            </div>
            <div>
               <button onClick={onSendMessageClick}>Send</button>
            </div>
         </div>

      </div>
   )
};

export default Dialogs;