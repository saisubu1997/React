import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var styles={color:'grey'};
class Header extends Component {
  render (){
    return(
      <div>
      <h2>Welcome{this.props.name}</h2>

      </div>
    );
  }
}
class Footer extends Component {

  render() {
    return (
  <div>
        <h1>Footer</h1>

</div>
    );
  }
}
class App extends Component {
   getInitialState (){
    return{
      user:'sai',
      id:'101',
    }
  }


  render() {
    return (
      <div className="App" >
      <div style={styles}>

      <h2 >Rendering </h2>
    </div>
    <Header name=" REACT"/>
    <Footer />
  
      </div>
    );
  }
}

export default App;
