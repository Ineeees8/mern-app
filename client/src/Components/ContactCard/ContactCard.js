import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {deleteContact} from '../../JS/Actions/contact';



const ContactCard = ({contact}) => {
  const dispatch= useDispatch();
  const Navigate = useNavigate();
  return (
    <div>
    <Card sx={{ maxWidth: 400 , width:300, marginBottom : "3%" }}>
    <CardMedia
      sx={{ height: 140 }}
      image= {contact.profile_img}
      title="Michka"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {contact.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {contact.email}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {contact.phone}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="contained" color="success" onClick={()=> Navigate(`/editContact/${contact._id}`)}>Edit<EditIcon sx={{color:"white"}}/></Button>
      <Button size="small" variant="contained" color="error"  onClick={()=> dispatch(deleteContact(contact._id))}>Delete<DeleteIcon sx={{color:"white"}}/></Button>
    </CardActions>
  </Card>
    </div>
  )
}

export default ContactCard
