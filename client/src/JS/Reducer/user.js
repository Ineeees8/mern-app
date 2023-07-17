
import { FAIL_USER, LOAD_USER, REGISTER_USER, CLEAR_ERRORSUSER , CLEAR_SUCCESSUSER, LOGIN_USER, CURRENT_USER, LOGOUT_USER, EDIT_USERPASSWORD } from "../ActionTypes/user";











const intialeState={
    user: {} ,
    isAuth: false ,
    loadUser : false ,
    newUser: {} ,
    errors : null ,
    success : null
}




const userReducer = (state = intialeState , {type , payload})=>{
    switch(type){
        case LOAD_USER:
        return {...state, loadUser : true}

        case REGISTER_USER :
       localStorage.setItem("token",payload.token)
       return{...state, loadUser : false, newUser: payload.newUser , success : payload.success , isAuth : true}

        case LOGIN_USER :
        localStorage.setItem("token",payload.token)  
        return{...state, loadUser: false, user: payload.user , success: payload.success , isAuth : true}

        case CURRENT_USER:
        return{...state , loadUser:false , user : payload , isAuth : true}

        case EDIT_USERPASSWORD:
            return{...state, loadUser:false, user:payload.updateUserPassword ,isAuth:true , success: payload.success}

        case LOGOUT_USER :
        localStorage.removeItem("token")  
        return{
            user: null,
            isAuth: false,
            loadUser : false ,
            errors : null,
            success : null,
            newUser: {}}

        case FAIL_USER : 
        return{...state,loadUser:false,errors:payload}

        case CLEAR_ERRORSUSER : 
        return{...state,errors: null}

        case CLEAR_SUCCESSUSER :
        return{...state , success : null}
        
        default:return state;

    }
    
}
export default userReducer;
