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
      <m.Button onClick={(e) => Delete(e,props.id)} variant="contained">Delete</m.Button>
    </m.ListItem>
  );
}

const Delete = async (e,id) =>{
  await axios.delete("http://ec2-52-14-74-144.us-east-2.compute.amazonaws.com/api/products/" + id);
}