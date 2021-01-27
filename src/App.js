import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react';
import ListItem from './components/listItems';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
  }
  handleInput=(e)=>{
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    });
  }

  addItem=(e)=>{
    e.preventDefault();
    const newItem=this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const items=[...this.state.items,newItem]
      this.setState({items,
      currentItem:{
        text:'',
        key:''
      }})
    }

  }

  setUpdate=(text,key)=>{
    console.log("items"+this.state.items);
    const items=this.state.items;
    items.map(item=>{
      if(item.key===key){
        console.log(item.key+" "+key);
        item.text=text;
      }
    });
    this.setState({items:items})
  }

  deleteItem=(key)=>{
    const filterItems=this.state.items.filter(item=>item.key!=key);
    this.setState({items:filterItems})
  }

  reset=()=>{
    const finalItems=[]
    this.setState({items:finalItems})
  }
  styles={
    color:'green',
    fontStyle:'italic'
  }
  render() { 
    return ( 
    <div className="container">
      <h1 style={this.styles}>TODO LIST</h1>
      <form onSubmit={this.addItem}>
        <input type="text" placeholder="enter task" className="form-control col-lg-4"  
        value={this.state.currentItem.text} onChange={this.handleInput}></input>
        <button className="btn btn-primary m-1" type="submit">Add</button>
        <button className="btn btn-warning m-1" onClick={this.reset}>clear</button>
      </form>
     
     <ListItem items={this.state.items} 
     deleteItem={this.deleteItem}
     setUpdate={this.setUpdate}></ListItem>
    </div> );
  }
}
 
export default App;
