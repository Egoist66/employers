import "./search-panel.css";
import { Component } from "react";

class SearchPanel extends Component{
    constructor(props){
        super(props);

    }

 

    render(){
       
        const {query, onUpdateSearch} = this.props;

        return (

            <div>
    
                <input value={query} onChange={onUpdateSearch} placeholder="Найти сотрудника" className="form-control search-input" type="text" />
    
            </div>
        )
    }

   
}


export default SearchPanel