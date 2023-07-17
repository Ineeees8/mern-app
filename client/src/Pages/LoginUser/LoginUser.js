import { Button,  FormControl, IconButton, InputAdornment, InputLabel, TextField } from '@mui/material'
import React from 'react'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Input from '@mui/material/Input';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import{login} from '../../JS/Actions/user'


const LoginUser = () => {

 const navigate = useNavigate()
    const dispatch = useDispatch()

  const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
     const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const isAuth = useSelector(state=>state.userReducer.isAuth)

    const [user , setUser]= useState({});
    
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value});
      };

      const handleUser = (e)=>{
        e.preventDefault();
        dispatch(login(user));
      }
    

  return (
    
    <div>
    {isAuth ? navigate ("/") : 
    <div>
      <h1>Login User</h1>
      <br/><br/>
      <TextField id="standard-basic" label="Email" variant="standard" onChange={handleChange} name ='email' sx= {{ m: 1, width: '25ch' }} />
     <br/>
     <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" >
     <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
     <Input onChange={handleChange} name = 'password'
       id="standard-adornment-password"
       type={showPassword ? 'text' : 'password'}
       endAdornment={
         <InputAdornment position="end">
           <IconButton
             aria-label="toggle password visibility"
             onClick= {handleClickShowPassword}
             onMouseDown= {handleMouseDownPassword}
           >
             {showPassword ? <VisibilityOff /> : <Visibility />}
           </IconButton>
         </InputAdornment>
       }
     />
   </FormControl>
<br/>
<br/>
   <Button variant="contained" color="success" onClick={handleUser}>Login<LoginIcon sx={{width:"1rem"}}/></Button>
   <br/>
   <br/>
   <Button variant="outlined" onClick={()=>{navigate('/Register')}}>Don't have an account yet ? <br/> Sign up and join us now!</Button>
   </div>
}
    
    </div>
  )
}

export default LoginUser
