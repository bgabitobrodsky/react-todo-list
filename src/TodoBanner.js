import React, {Component} from 'react';

export class TodoBanner extends Component{
  render(){
    const {name, tasks} = this.props;
    return(
      <h4 className="bg-primary text-white text-center p-2">
        Tareas de {name} 
        <br></br> Faltan ({tasks.filter(t=> !t.done).length}) tarea(s)
      </h4>
    )
  }
    
}