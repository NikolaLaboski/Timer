import React from 'react';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import App1 from './App1'



 
library.add(faTrash) 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      items:[],
      currentItem:{
        text:'',
        key:'' 
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems 
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
   
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
  }

  

 render(){
  return (
    <div>
      <div className="row" id="r1">
      <h2 style={{color:'yellow'}} className="centar">Тајм тракер</h2>
      </div>

      <div className="row" id="r1"> 
      <p style={{color:'yellow'}} className="centar1">Зачувај ги своите задачи, активности, во листа која ќе ти овозможи 
      повеќе организираност и поуспешен работен ден. Јасниот преглед на твоите планови ти помага 
      да останеш фокусиран и да не испуштиш нешто важно. 
      </p>
      </div>

    <div className="row">
      <div className="half">
      <App1 />
      </div>
      

      <div className="half">
      <div className="App">
      
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Внеси проект" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Додај</button>
        </form>
        <p>{this.state.items.text}</p>
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
      </header>
      </div>
      </div>
      </div>
    </div>
    
  );
 }
}


export default App;