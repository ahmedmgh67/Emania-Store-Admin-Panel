import React from 'react';
import * as m from '@material-ui/core';
import axios from 'axios';
import ProductItem from './ProductItem';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';

var products = [];
export default class ProductApp extends React.Component {
   constructor(props){
      super(props);
      this.state = {
          name: [],
          price: [],
          picture: [],
          category: []
     };
}
Style = {
   margin: '10px',
   padding: '10px'
};
componentDidMount = async ()  =>  {
  console.log("getting products")
  if(products[0] == null)
  await axios.get('http://ec2-18-191-137-0.us-east-2.compute.amazonaws.com/api/products').then((res) => {
    for (var i = 0; i < res.data.length - 1; i++){
      this.setState({
          name: [...this.state.name, res.data[i].name],
          price: [...this.state.price, res.data[i].price],
          picture: [...this.state.picture, res.data[i].images[0]],
          category: [...this.state.category, res.data[i].category[0]]
      });
    products.push(<ProductItem
      picture={this.state.picture[i]}
      name={this.state.name[i]}
      price={this.state.price[i]}
      category={this.state.category[i]}
      id={res.data[i]._id}
    />)
    };
    
  }).catch ((err) => {
       console.log(err);
  });
}
render() {
    return (
      <div>
        <Link exact to="/products/new"><m.Fab className="fab" variant="extended" >
          <AddIcon/>   Add Product
        </m.Fab></Link>
        <m.List style={{margin:0,height:100}}>
          {products}
        </m.List>
      </div>
    );
 }
}
