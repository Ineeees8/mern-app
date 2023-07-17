//Importation

import { FAIL_CONTACTS, GET_CONTACT, GET_CONTACTS, LOAD_CONTACTS } from "../ActionTypes/contact";






//IntialeState
const IntialeState={
    listContacts: [] ,
    contactToGet: {} ,
    load : false ,
    errors : null,
   
    
    
}



//Pure functions

const contactReducer =(state=IntialeState, {type , payload})=>{
    switch(type){
       case LOAD_CONTACTS:
        return {...state, load : true }
        case GET_CONTACTS :
        return{...state , load:false, listContacts: payload.listContacts}
        case GET_CONTACT :
        return{...state,load:false,contactToGet:payload.contactToGet}
        case FAIL_CONTACTS :
        return{...state , load:false , errors:payload}
        default:return state;

    }
    
}
export default contactReducer;