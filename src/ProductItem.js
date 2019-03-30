import * as m from '@material-ui/core';
import React from 'react';
import axios from 'axios';

export default function ProductItem  (props)  {
  return (
    <m.ListItem size="large" divider> 
      <m.ListItemAvatar>
        <m.Avatar src={props.picture} alt="Product Photo"></m.Avatar>
      </m.ListItemAvatar>
      <m.ListItemText primary={props.name} secondary={"$  "+ props.price}></m.ListItemText>
      <m.Button style={{margin:10,}} variant="contained">Edit</m.Button>
      <m.Button onClick={(e) => Delete(e,props.id)} variant="contained">Delete</m.Button>
    </m.ListItem>
  );
}

//<m.Button style={{margin:10,}} variant="contained">Edit</m.Button>

/*function Delete  (e,id) async {
  console.log("https://emania-store-api.herokuapp.com/api/products/" + id)
  await axios.delete("https://emania-store-api.herokuapp.com/api/products/" + id);
}*/

const Delete = async (e,id) =>{
  await axios.delete("https://emania-store-api.herokuapp.com/api/products/" + id);
}