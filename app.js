

import React, {Component} from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:
    [
      {
        "name":"Fazil : Bai"
      },
      {
        "name":"Bharath : Gowda"
      },
      {
        "name":"Bala : Smile face "
      },
      {
        "name":"Chandru : Gym Body"
      },
      {
        "name":"Anantha Krishnan : Old Joke"
      },
      {
        "name":"Selva : Sound"
      }
    ]
    }
  }

render(){
  return(
    <div>
      <Movie/>
      <ul>
        {this.state.data.map((item)=><List data={item}/>)}
      </ul>
    </div>
  );
}
}
class Movie extends React.Component{
render(){
  return(
    <div>
      <h1 style={{color:'#2CF104', textAlign: "center"}}>Buddys Club</h1>
      <h2 style={{color:'#04F1ED', textAlign: "center"}}>Its about My Friends </h2>
      {/* <h1 style={{ color: '#8504F1', textAlign: "center" }}>TIME TO TRAVEL</h1><h2>LADAKH</h2> */}
    </div>
  );
}
}
class List extends React.Component{
  render(){
    return(
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
      
    );
  }
}
export default App;