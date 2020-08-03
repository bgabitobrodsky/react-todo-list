import React, {Component} from 'react';

export class TodoBanner extends Component{

    render =()=>
        <h4 className="bg-primary text-white text-center p-2">
          Tareas de {this.props.name} 
          <br></br>Faltan ({this.props.tasks.filter(t=> !t.done).length}) tarea(s)
        </h4>
    
}