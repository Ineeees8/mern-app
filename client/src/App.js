import React from 'react';
import './App.css';
import ResponsiveAppBar from './Components/NavBar/ResponsiveAppBar';
import {Route,Routes} from "react-router-dom";
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import AddContact from './Pages/AddContact/AddContact';
import ListContacts from './Pages/ListContacts/ListContacts';
import EditContact from './Pages/EditContact/EditContact';
import LoginUser from './Pages/LoginUser/LoginUser';
import RegisterUser from './Pages/RegisterUser/RegisterUser';
import UpdatePassword from './Pages/UpdatePassword/UpdatePassword';
import { useEffect } from 'react';
import { current } from './JS/Actions/user';
import { useDispatch, useSelector } from 'react-redux';
import Successnotif from './Components/Successnotif/Successnotif';
import Errornotif from './Components/Errornotif/Errornotif';





function App() {

const dispatch = useDispatch()
  
  const isAuth = useSelector(state=>state.userReducer.isAuth)
  const usererrors = useSelector(state=>state.userReducer.errors)
  const usersuccess = useSelector(state=>state.userReducer.success)




  useEffect(()=>{
    if (localStorage.getItem('token')){
    dispatch(current())
    }
  }, [dispatch])

  return (
    
    
    <div className="App">
    <div>
   {usersuccess && usersuccess.map((el)=> <Successnotif success={el}/>)}
   {usererrors && usererrors.map((el)=> <Errornotif errors={el}/>)}</div>



      <ResponsiveAppBar/>
     
      <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/*' element ={<Error/>}/>
      {isAuth ? <Route path='/AddContact' element ={<AddContact/>}/> : null}
      <Route path='/ListContacts' element ={<ListContacts/>}/>
      <Route path='/EditContact/:_id' element ={<EditContact/>}/>
      <Route path='Login' element = {<LoginUser/>}/>
      <Route path='Register' element= {<RegisterUser/>}/>
      <Route path="updatepassword/:id" element={<UpdatePassword/>}/>
      
      </Routes>

    </div>
  );
};

export default App;
