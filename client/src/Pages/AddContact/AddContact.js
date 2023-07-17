import {TextField , Button, CircularProgress} from '@mui/material';
import React , { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {addContact} from '../../JS/Actions/contact';
import {Helmet} from 'react-helmet'

const AddContact = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
   const load= useSelector((state) => state.contactReducer.load)
   const [contact, setContact] = useState({})
   const [file , setFile] = useState(null)
    const handleChange =(e)=>{
      setContact({...contact , [e.target.name] : e.target.value })
    }
    const handlePhoto=(e)=>{
     setFile(e.target.files[0])
    } 
    const handleAdd=(e)=>{
      e.preventDefault();
      let data = new FormData()
      data.append("name", contact.name)
      data.append("email", contact.email)
      data.append("phone", contact.phone)
      data.append("image" , file)
      dispatch(addContact(data, Navigate))
    }
  return (
    <div>
 <Helmet>
 
 </Helmet>
 <h1>Add contact</h1>
    
      
     
     <TextField id="standard-basic" label="name" variant="standard" onChange={handleChange} type="text" name='name' />
     <br/>
     <TextField id="standard-basic" label="email" variant="standard" onChange={handleChange} type='text' name='email' />
     <br/>
     <TextField id="standard-basic" label="phone" variant="standard" onChange={handleChange} type='number' name='phone'/>
     <br/>
     
     <input type='file' id='file-input' encType='multipart/form-data' onChange={handlePhoto}/>
     
     <br/>
    {load?
      <Button variant = "contained" color ="success" onClick={handleAdd}>
     <CircularProgress size="1rem" sx= {{color:"white"}} />
     Add Contact
     </Button> : 
    <Button variant = "contained" color ="success" onClick={handleAdd}>Add Contact</Button>
    }
   
    </div>
  )
}

export default AddContact
