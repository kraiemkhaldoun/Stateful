import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds : 0,
      on: false
     }
  }
timer = (number)=>{
  var a=number/3600
  var h=Math.floor(a)
  var m=Math.floor((a-h)*60)
  var s=Math.floor((((a-h)*60)-m)*60)
  return(
    <h1 style={{display:"flex",justifyContent:"center"}}>
      {h}:{m}:{s}

    </h1>
  )
}
start = ()=>
{
  this.setState({on:true})
  this.var= setInterval(()=> {this.setState({seconds:this.state.seconds + 1})},1)
}
stop = ()=>
{ 
clearInterval(this.var)
this.setState({on: false})
}
reset =()=>
{
clearInterval(this.var)
this.setState({seconds:0})
}

  render() { 
    return ( 
    <div >
      {this.timer(this.state.seconds)}

<div  style={{display:"flex",justifyContent:"center"}}>
      <button onClick={!this.state.on ? this.start : this.stop}> START</button>
      <button onClick={this.reset}>RESET</button>

    </div>
    </div>
 );
  }
}
 
export default App;


