import React, {Component} from 'react';

export class TodoRow extends Component{

    render(){
        const {item,callback} = this.props;
        return(
        <tr className={item.done? "bg-success" : "bg-danger"} key={item.action}>
            <td>{item.action}</td>
            <td> <input type="checkbox" checked={item.done} 
                    onChange={()=> callback(item)}/> 
            </td>
        </tr>

        );
    }    
}