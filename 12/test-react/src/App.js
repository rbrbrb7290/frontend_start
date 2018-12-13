import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    sec:0
  }

  componentDidMount(){
    window.setInterval(()=>{
      this.setState(state=>({
        sec:state.sec+1
      }));
    },1000)
  }
  
  render() {
    return (
      <div className="App" style={{fonSize:'34px'}}>
        {this.state.sec}
        {this.props.name}
      </div>
    );
  }
}

export default App;
