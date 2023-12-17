import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";



function EmployeesList({perk, data, onDelete, onToggleIncrease}){

   
    const elements = data.map((item, i) => {
        const {id, ...itemProps} = item;
       
        return(
          
            <EmployeesListItem  perk={perk} onToggleIncrease={() => {onToggleIncrease(id)}}  onDelete={() => onDelete(id)}  key={id}  {...itemProps}/>
        )

       
    
    });
   
    return (
        <ul className="app-list list-group">

            {elements}

        </ul>
    )


}



export default EmployeesList