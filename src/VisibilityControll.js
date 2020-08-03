import React, {Component} from 'react';

export class VisibilityControll extends Component{

	render(){
		const {checked, description, callback} = this.props;

		return(
			<div className="form-check">
				<input className="form-check-input" type="checkbox" 
					checked={checked}
					onChange={ (e) => callback(e.target.checked)}	/>
				<label className="form-check-label">
					{description}
				</label>
			</div>	  
		 // usamos props para recibir informacion del componente padre
		);
	}
}