const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'

let initialState = {
   DialogsData: [
      { id: 1, name: "Jenya" },
      { id: 2, name: "Sergey" },
      { id: 3, name: "Artur" }
   ],
   MessageData: [
      { id: 1, message: "Hello" },
      { id: 2, message: "How is your sochial network?" },
      { id: 3, message: "It's create!" }
   ],
   newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      
      case UPDATE_NEW_MESSAGE_BODY : {
         state.newMessageBody = action.newMessageBody;
         return state;
      }
      
      case SEND_NEW_MESSAGE : {
         state.MessageData.push({
            id: 4,
            message: state.newMessageBody
         });
         state.newMessageBody = action.newMessageBody;
         state.newMessageBody = '';
         return state;
      }
        
   
      default:
         return state;
   }
}
export const sendNewMessageActCreator = ()=> ({type: 'SEND_NEW_MESSAGE'})
export const updateNewMessageBodyActCreator = (body) => ({
   type: 'UPDATE_NEW_MESSAGE_BODY',
   newMessageBody: body
   })

export default dialogsReducer;