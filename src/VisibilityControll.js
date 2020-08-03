import React, {Component} from 'react';

export class VisibilityControll extends Component{

	render =()=>
		<div className="form-check">
			<input className="form-check-input" type="checkbox" 
				checked={this.props.isChecked}
				onChange={ (e) => this.props.callback(e.target.checked)}	/>
			<label className="form-check-label">
				{this.props.description}
			</label>
		</div>	  
	 // usamos props para recibir informacion del componente padre
}