import React, { Component } from 'react';

import './App.css';

class App extends Component {
 
  constructor(props){
    
    super(props);

    this.state = {
      newItem: '',
      list: []
    }
  }
  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }

  addItem(){
    const newItem = { 
      id : 1 + Math.random(),
      value: this.state.newItem.slice()      
    };
  
  const list = this.state.list;  
  list.push(newItem);
  // this.state.list.push(newItem)
   
    this.setState({
      list, 
      newItem:""
    });
  }
  componentDidMount(){
    this.addItem();
    console.log('Component did mount')
  }
  deleteItem(id){
    const list =[...this.state.list];
    const updatedList = list.filter(
      item => item.id!== id
    )

    this.setState({
      list: updatedList
    });
  }
  render(){
  return (
    <div className="App">
      <div>
        My To-do List<br/>
        <br/>
        <input 
          type= 'text' 
          placeholder = 'Type the To-do list items here'
          value = {this.state.newItem}
            onChange={
              event => this.updateInput('newItem',event.target.value)
            }  
        />
        <button 
          onClick= {()=> this.addItem()}>
            Add Item to the List
        </button>
      <br/>
      <ul>
          {this.state.list.map(item=>{
              return(
                <li key={item.id}>
                  {item.value}
                  <button 
                    onClick ={() => this.deleteItem(item.id)}> Delete  
                  </button>
                </li>
              )
            }
          )}
      </ul>
      </div>
    </div>
  );
}
}
export default App;
