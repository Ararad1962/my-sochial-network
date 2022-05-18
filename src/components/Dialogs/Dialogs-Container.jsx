import React from "react";
import Dialogs from "./Dialogs";
import { updateNewMessageBodyActCreator, sendNewMessageActCreator } from '../../Redux/dialogsReducer'

function DialogsContainer(props) {
   let state = props.store.getState().dialogsPage;

   const onSendMessageClick = () => {
      props.store.dispatch(sendNewMessageActCreator());

   };
   const onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyActCreator(body));
   };

   return (<Dialogs updateNewMessageBody={onNewMessageChange}
      sendNewMessage={onSendMessageClick}
      dialogsPage={state}
   />
   );
}

export default DialogsContainer;