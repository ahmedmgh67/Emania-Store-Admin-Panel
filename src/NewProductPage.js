import React from 'react'
import * as m from '@material-ui/core';
import './NewProductPage.css'
import axios from 'axios';


class NewProductPage extends React.Component {

  state = {
    name: '',
    price: '',
    imageurl: '',
    desc: '',
    category: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    return (
      <div class="newpr">
        <m.Typography className="nptitle" variant="h3">New Product</m.Typography>
        <div class="form">
          <m.TextField 
            fullWidth
            margin="normal"
            label="Name " 
            className="forminput"
            value={this.state.name}
            onChange={this.handleChange('name')}
            variant="outlined" 
            size="large"/>
          <br/>
          <m.TextField 
            value={this.state.price}
            onChange={this.handleChange('price')}
            margin="normal" 
            label="Price" 
            className="forminput" 
            variant="outlined" 
            size="large"/>
          <br/>
          <m.TextField
            value={this.state.imageurl}
            onChange={this.handleChange('imageurl')}
            fullWidth
            margin="normal" 
            label="Image URL" 
            className="forminput" 
            variant="outlined" 
            size="large"/>
          <br/>
          <m.TextField 
            value={this.state.desc}
            onChange={this.handleChange('desc')}
            fullWidth
            rowsMax="4" 
            multiline 
            margin="normal" 
            label="Description" 
            className="forminput" 
            variant="outlined" 
            size="large"/>
          <m.TextField 
            value={this.state.category}
            onChange={this.handleChange('category')}
            fullWidth
            margin="normal" 
            label="Category" 
            className="forminput" 
            variant="outlined" 
            size="large"/>
        </div>
        <div id="subnpbu">
          <m.Button 
            id="subnpbu" 
            onClick={Submit(this.state.name, this.state.price, this.state.imageurl,this.state.desc, this.state.category)} 
            variant="contained"
            >Submit Product
          </m.Button>
        </div>
      </div>
    )
  }


}

export default NewProductPage;

function Submit (name, price, imageurl, desc, category){
  axios.post("http://ec2-52-14-74-144.us-east-2.compute.amazonaws.com.us-east-2.compute.amazonaws.com/api/products",{
    "name": name,
    "price": price,
    "images":[
      imageurl
    ],
    "desc": desc,
    "category": category
  }).then((data) => {
    
  })
}