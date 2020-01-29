import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import axios from "axios";

Amplify.configure(awsconfig);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {},
      products: {}
    }
  }

  getItems = () => {
    console.log('calling Amplify API....')
    API.get('Items','/items',{}).then(response => {
      // Add your code here
      console.log('--------Response from amplify API----------');
      console.log(response);
      this.setState({items:response.success})
    }).catch(error => {
      console.log(error.response)
    });
  }

  getProducts = () => {
    console.log('calling SLS API....')
    axios.get('https://es0qurxzm0.execute-api.us-east-1.amazonaws.com/dev/products')
    .then(function (response) {
      // handle success
      console.log('SLS API response....')
      console.log(response);
      this.setState({products: response})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Amplify Auth Added...
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React + AWS Amplify
          </a>
          <button onClick={this.getItems}>List Items</button>
          <p>{JSON.stringify(this.state.items)}</p>
          <hr />
          <button onClick={this.getProducts}>List Products</button>
          <p>{JSON.stringify(this.state.products)}</p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
