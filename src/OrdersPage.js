import React from 'react';
import * as m from '@material-ui/core'
import axios from 'axios';
import OrderItem from './OrderItem';


var orders = [];

class OrderApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: [],
      address: [],
      price: [],
      phone: [],
      products: [],
      payment: []
    };
  }

componentDidMount = async ()  =>  {
  if(orders[0] == null)
    await axios.get('http://ec2-18-191-137-0.us-east-2.compute.amazonaws.com/api/orders').then((res) => {
      for (var i = 0; i < res.data.length; i++){
        this.setState({
            id: [...this.state.id, res.data[i].id],
            address: [...this.state.address, res.data[i].address],
            price: [...this.state.price, res.data[i].price],
            phone: [...this.state.phone, res.data[i].phone],
            products: [...this.state.id, res.data[i].product],
            payment: [...this.state.payment, res.data[i].payment]
        });

        orders.push(<div>
          <OrderItem
          id={this.state.id[i]}
          address={this.state.address[i]}
          price={this.state.price[i]}
          products={this.state.products[i]}
          phone={this.state.phone[i]}
          payment={this.state.payment[i]}/>
        <br/>
        </div>);
        console.log("got orders")
      }  
      }).catch ((err) => {
        console.log(err);
    });
  }
render() {
  return (
  <div>
  <m.List style={{margin:0,height:100}}>
    {orders}
  </m.List>
</div>);
};
}
//  <OrderDetailsDialog/>

export default OrderApp;