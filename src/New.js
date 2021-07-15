import React from "react";
import "./style.css";
import axios from "axios";

export default class Info extends React.Component{
  constructor(props){
    super(props);
    this.state = {flag: false}    
  }
  onHover = () => {
    console.log(this.state.flag);
    this.setState({
      flag: true
    })
  }
  onUnHover = () => {
    console.log(this.state.flag);

    this.setState({
      flag: false
    })
  }
  render(){
    return(
      <div onMouseEnter = {this.onHover} onMouseLeave = {this.onUnHover}>
        {this.props.user.map((user,i)=>(
            <div>
             {this.props.index==i && <div onClick = {this.onHover}>
              UserName: {this.props.user[i].name}
              <br></br>
              {this.state.flag &&( <div>
                
                Email:
                  {this.props.user[i].email}
                  <br></br>
                Website:
                  {this.props.user[i].website}
                  <br></br>
                Phone:
                  {this.props.user[i].phone}
                
                </div>)}

              </div>}
            </div>
          ))}
      </div>
    )
  }
}

export default class Display extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={users:[], index:1}
    
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{this.setState({
      users:response.data
    })})
    .catch(err=>console.log(err))
  }
  render(){
    return(
      <>
        <div align="center" className="c" > 
          <button className="c1" onClick={()=>{
            {this.state.index>0 && this.setState({index:this.state.index-1})}
          }}> Left </button>
          
          {'  '}  {this.state.index+1} {' '}
          
          <button className="c3" onClick={()=>{
           {this.state.index<this.state.users.length-1 && this.setState({index:this.state.index+1})}
          }}>  Right  </button>
          </div>
          <br/>
          <div align="center" className="r2">
          <Info user={this.state.users} index={this.state.index}/>
          </div>
          </>
        
    )
  }
}

export default function New() {
  return (
  
    <div>
      <Display />
    </div>
   
  );
}