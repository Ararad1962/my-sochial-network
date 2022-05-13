const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'


const dialogsReducer = (state, action) => {
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
   
//    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//       state.newMessageBody = action.newMessageBody;
      
//    } else if (action.type === SEND_NEW_MESSAGE) {
//       state.MessageData.push({
//          id: 4,
//          message: state.newMessageBody
//       });
//       state.newMessageBody = action.newMessageBody;
//       state.newMessageBody = '';
      
//    }

// return state;
// }

export default dialogsReducer;