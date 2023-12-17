import "./employees-list-item.css";
import { Component } from "react";

class EmployeesListItem extends Component{


    render(){
        
        const {name, salary, onDelete, onToggleIncrease, increase, perk} = this.props;
    
       
        return (

            <li className={increase ? `list-group-item d-flex justify-content-between increase ${perk} ` : `list-group-item d-flex justify-content-between`}>
                <span onClick={onToggleIncrease}  className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm " onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                        
                    </button>

                    <button onClick={onDelete} type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>


        )
    }

   
}

export default EmployeesListItem