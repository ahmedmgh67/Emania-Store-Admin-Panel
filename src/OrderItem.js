import * as m from '@material-ui/core';
import React from 'react';
import { Link }from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function OrderIteam  (props)  {
  return (
    <div>
      <m.ListItem size="large" divider>  
        <m.ListItemText primary={props.address} secondary={props.price}></m.ListItemText>
        <Link 
          class="link" 
          exact 
          to="/orders/details"
            ><m.Button 
            variant="outlined"
            >Details</m.Button>
        </Link>
      </m.ListItem>
    </div>
  );
};


export default function OrderItem (props) {

    return (
      <div>
        <m.ExpansionPanel>
          <m.ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <m.Typography variant="h5">  {props.address}</m.Typography>
          </m.ExpansionPanelSummary>
          <m.ExpansionPanelDetails>
            
            <m.List>
              Address: {props.address}<br/>
              Cost: $  {props.price}<br/> 
              Phone: {props.phone}<br/>
              Products Ordered : 
              {props.products.map((item ,index) => (
                <m.ListItem key={index} >
                  <m.ListItemText primary={item} key={index}/>
                </m.ListItem>
              ))}
            </m.List>
          </m.ExpansionPanelDetails>
        </m.ExpansionPanel>
      </div>
    )
}
