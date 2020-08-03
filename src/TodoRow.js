import React, {Component} from 'react';

export class TodoRow extends Component{

    render =()=>
        <tr className={this.props.item.done? "bg-success" : "bg-danger"} key={this.props.item.action}>
            <td>{this.props.item.action}</td>
            <td> <input type="checkbox" checked={this.props.item.done} 
                    onChange={()=> this.props.callback(this.props.item)}/> 
            </td>
        </tr>
    
}