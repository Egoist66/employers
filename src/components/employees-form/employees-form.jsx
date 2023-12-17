import "./employees-form.css";
import { Component } from "react";

class EmployeesForm extends Component{
 
    render(){


        const {onValueChange, name, salary, addItem} = this.props;

        return (

            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
              
                <form onSubmit={addItem}  className="add-form d-flex">
                    <input onChange={onValueChange} type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" name="name"  value={name} />
                    <input onChange={onValueChange} min={0} step={100} type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" name="salary" value={salary} />
    
                    <button  type="submit" className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );

    }

    
}

export default EmployeesForm