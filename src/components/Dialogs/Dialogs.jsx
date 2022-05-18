import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
debugger;
function Dialogs(props) {

   let state = props.dialogsPage;

   let DialogsElements = state.DialogsData.map(dialog => <DialogItem
      id={dialog.id}
      name={dialog.name} />
   );
   let MessageElements = state.MessageData.map(phrase => <Message
      message={phrase.message} />
   );

   const onSendMessageClick = () => {
      props.sendNewMessage();
   };

   const onNewMessageChange = (event) => {
      let text = event.target.value;
      props.updateNewMessageBody(text);
   };

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>

            {DialogsElements}
         </div>
         <div className={s.usersDialogs}>
            <div>
               {MessageElements}
            </div>
            <div>
               <textarea value={props.newMessageBody}
                  onChange={onNewMessageChange}
                  placeholder='Enter your message'></textarea>
            </div>
            <div>
               <button onClick={onSendMessageClick}>Send</button>
            </div>
         </div>
      </div>
   );
}

export default Dialogs;