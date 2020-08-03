import React, {Component} from 'react';

export class TodoCreator extends Component{

	constructor(props){
		super(props);
		this.state = {
			newItemText : ""
		}
	}

	updateNewTextValue =(event) =>{
		this.setState({
			newItemText : event.target.value
		});
	}
	 
	//sino hay uno con igual nombre lo agrega
	createNewToDo =() =>{
		this.props.callback(this.state.newItemText);
		this.setState({newItemText : ""});
	}

	render =() =>
		<div className="text-center m-2">
			<input className="form-control" 
				value={this.state.newItemText}
				onChange={this.updateNewTextValue}/>
			<button className="btn btn-success mt-1"
				onClick={this.createNewToDo}>
				Agregar
			</button>
		</div>
}