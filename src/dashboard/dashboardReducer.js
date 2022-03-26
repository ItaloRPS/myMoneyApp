const INITIAL_STATE = {summary:{credit:0,debit:0}}

export default function(state = INITIAL_STATE, action){
   switch (action.type) {
       case 'BILLING_SUMMERY_FETCHED':
           return{...state,summary:action.payload.data}
           break;
   
       default:
        return state
           break;
   }
}