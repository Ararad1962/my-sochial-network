import React from "react";
import Dialogs from "./Dialogs";
import { updateNewMessageBodyActCreator, sendNewMessageActCreator } from '../../Redux/dialogsReducer'
import StoreContext from "../../StoreContext";

function DialogsContainer() {


   return (
      <StoreContext.Consumer> 
         {
         (store) => {
            let state = store.getState().dialogsPage;

            const onSendMessageClick = () => {
               store.dispatch(sendNewMessageActCreator());

            };
            const onNewMessageChange = (body) => {
               store.dispatch(updateNewMessageBodyActCreator(body));
            };
            return (
            <Dialogs updateNewMessageBody={onNewMessageChange}
               sendNewMessage={onSendMessageClick}
               dialogsPage={state}
            />
            )
         }
      }
      </StoreContext.Consumer>
   );
}

export default DialogsContainer;