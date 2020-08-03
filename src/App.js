import React,{Component} from 'react';

//importando child components al parent compoenent
import {TodoBanner} from "./TodoBanner.js";
import {TodoCreator} from "./TodoCreator.js";
import {TodoRow} from "./TodoRow.js";
import {VisibilityControll} from "./VisibilityControll.js"

// añadiendo datos dinamicos a la App

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      userName : "Bernardo",
      todoItems : [],
      showCompleted : false
    }
  }

  updateNewTextValue =(event) =>{
    this.setState({
      newItemText : event.target.value
    });
  }

  createNewToDo =(task) =>{
    //sino hay uno con igual nombre lo agrega
    if(!this.state.todoItems.find(item=>item.action === task)){
      this.setState({
        // ... es "spread period" es para expandir un array
        todoItems : [...this.state.todoItems, // primero agrega toda la lista anterior y despues el nuevo
                    {action : task,
                    done : false}]
        },
        () => localStorage.setItem("todo",JSON.stringify(this.state)))
      }
    }

  //flecha gorda para no tener que poner un return

  toggleTask = (task) => this.setState({
    todoItems : this.state.todoItems.map(item => item.action === task.action ?
      {...item, done: !item.done} : item)
  });

  todoTableRows =(doneValue) => this.state.todoItems
    .filter(item => item.done === doneValue)
    .map(item => 
    <TodoRow item={item} callback={this.toggleTask}/>
  );

  // cargando los datos 
  componentDidMount =()=>{
    let data = localStorage.getItem("todo");
    this.setState(data!=null ? JSON.parse(data) : 
    {
      userName : "Bernardo",
      todoItems : [],
      showCompleted : false
    }
    );

  }

  render(){
    return(
      <div>
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems}/>

        <div className="container-fluid">
          
          <TodoCreator callback={this.createNewToDo}/>
          
          <div className="m-1">
            <table className="table table-stripped table-bordered">
              <thead>
                <tr>
                  <th>Tarea</th>
                  <th>Hecha</th>
                </tr>
              </thead>
              <tbody>
                {/* tareas incompletas */}
                {this.todoTableRows(false)}
              </tbody>
            </table>
            <div className="bg-success text-white text-center p-2">
              <VisibilityControll description="Mostrar Tareas Completadas" 
                isChecked={this.state.showCompleted}
                callback={(checked) => this.setState({showCompleted : checked})} 
              />
            </div>
              {this.state.showCompleted && 
                <table className="table table-stripped table-bordered">
                  <tbody>
                    {this.todoTableRows(true)}
                  </tbody>
                </table>
              }
          </div>
        </div>
      </div>
    )
  };
}