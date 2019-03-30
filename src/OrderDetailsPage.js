import React from 'react';
import * as m from '@material-ui/core';
import axios from 'axios';


var productsOrdered =[]


class OrderDetailsPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        name: [],
        address: [],
        id: []
    };
  }

  componentDidMount = async ()  =>  {
    GetProducts(this.props.id)
  };

  render(props){
    return(
      <div>
        <m.Typography variant="h3">ahmed </m.Typography>
        <m.Typography variant="h3"></m.Typography>
        <m.Typography variant="h3"></m.Typography>
        <m.Typography variant="h3">$ </m.Typography>
        <m.List>
          {productsOrdered}
        </m.List>
      </div>
    );
  }
}

const GetProducts = async (id) => {
  console.log("details")
  await axios.get("http://localhost:6112/products/" + id).then((data) => {
    for (let index = 0; index < data.data.product.length; index++) {
      productsOrdered.push(
        <m.ListItem primary={data.data.product[index]}></m.ListItem>
      );
    }
  })
}

export default OrderDetailsPage;