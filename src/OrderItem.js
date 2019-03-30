import * as m from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
