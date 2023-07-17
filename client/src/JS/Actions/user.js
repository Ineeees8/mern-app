import axios from "axios";
import {REGISTER_USER, LOGIN_USER,LOAD_USER,FAIL_USER,LOGOUT_USER,CURRENT_USER,CLEAR_SUCCESSUSER,CLEAR_ERRORSUSER, UPDATE_USERPASSWORD} from "../ActionTypes/user";



export const register =(newUser) =>async (dispatch)=>{
dispatch({ type : LOAD_USER})
try{
    let result = await axios.post("/api/user/register" , newUser)
    dispatch({type:REGISTER_USER , payload : result.data})
   
    
}
catch(error){
    dispatch({type:FAIL_USER, payload:error.response.data.errors})
}
}


export const login = (user)=>async(dispatch)=>{
    dispatch({type : LOAD_USER})
    try {
       let result = await axios.post("/api/user/login" , user)
        dispatch({type : LOGIN_USER , payload : result.data})
    } catch (error) {
        dispatch({type:FAIL_USER , payload:error.response.data.errors})
    }
}

export const current = ()=>async(dispatch)=>{
    dispatch ({type: LOAD_USER})
    try{
        const config = {
            headers : {
                authorization : localStorage.getItem("token")
            }
        }
let result = await axios.get("/api/user/current" , config)
        dispatch({type : CURRENT_USER , payload : result.data})
    }
    catch (error){
        dispatch({type:FAIL_USER , payload:error.response.data.errors})
    }
}

export const updateUserPassword = (id , newUser , navigate)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try{

        const config = {
            headers : {
                authorization : localStorage.getItem("token")
            }
        }
    
        let result = await axios.put(`/api/user/UpdatePassword/${id}` , newUser, config)
       
        dispatch({type:UPDATE_USERPASSWORD , payload : result.data})
        navigate('/')
        
    }
    catch(error){
        dispatch({type:FAIL_USER , payload:error.response.data.errors})

    }
}


export const logout = ()=> async (dispatch)=>{
     dispatch({type: LOGOUT_USER})
}

export const clearErrorsUser=()=>{
    return{
        type : CLEAR_ERRORSUSER,
    };
}

export const clearSuccessUser=()=>{
    return{
        type: CLEAR_SUCCESSUSER,
    };
}