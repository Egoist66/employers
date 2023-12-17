import { Component } from "react";


import AppInfo from "../app-info/app-info";
import SearchPanel from "../app-search-panel/app-search";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesForm from "../employees-form/employees-form";
import PanelWrapper from "../search-panel-wrapper/panel-wrapper";


import "./app.css";

class App extends Component {
    constructor(props) {
        super(props)
     

        this.state = { 
            name: "",
            salary: "",
            like: "like",
            employees: 0,
            data:  
            [
                { name: "Farid", salary: 1150, increase: false, id: 0 },
                { name: "Igor", salary: 1000, increase: true, id: 1 },
                { name: "John", salary: 300, increase: false, id: 2 },
                { name: "Peter", salary: 444, increase: false, id: 3 },
           
            ],
            query: "",
            filter: "all"
         

        }

        this.id = 3;

     
     
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
           
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        
    }

    addItem = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.salary === ''){
            alert('Empty fields were passed!')
            return
        }
        else {

            const newItem = {
                name: this.state.name, 
                salary: this.state.salary,
                increase: false,
                id: ++this.id
            }
    
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
         
            const timer = setTimeout(() => {
            
                this.setState({
                    
                    name: "",
                    salary: ""
                
                   
                })
    
                clearTimeout(timer)
             
            },1000)
        }
        
  
    }



    onToggleIncrease = (id) => {
        this.setState(({data}) => {

            return {
                data: data.map(item => {
                    if(item.id === id){
                        return {...item, increase: !item.increase}
                    }

                    return item;
                })
            }


        
        })
    }

    searchEmp = (items, query) => {

        if(query.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(query) > -1
        })
    }

    onUpdateSearch = (query) => {
        this.setState({
            query: query,
     
        })
    }

    tabFilter = (items, filter) => {
       
        switch(filter){
            case "promoted":
                return items.filter(item => item.increase === true);
            case "more":
                return items.filter(item => item.salary > 1000);
            default:
                return items;        
        }
     
        
    }

    switchFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }



    render(){
        
        const {data, name, salary, like, query, filter} = this.state;
        const promoted = data.filter(item => item.increase === true).length;
        const visibleData = this.tabFilter(this.searchEmp(data, query), filter)
      
    
       
        return (

            <div className="app">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-12">

                            <AppInfo promoted={promoted} count={data.length} />

                        </div>

                        <div className="col-lg-12">

                            <PanelWrapper>
            
                                <SearchPanel query={query} onUpdateSearch={(e) => {this.onUpdateSearch(e.target.value)}} />
                                <AppFilter onFilterSelect={this.switchFilter} filter={filter} />

                            </PanelWrapper>

                            <EmployeesList   perk={like}  onToggleIncrease={this.onToggleIncrease} onDelete={this.deleteItem} data={visibleData} />
                            <EmployeesForm addItem={(e) => {this.addItem(e)}} name={name} salary={salary} onValueChange={(e) => this.onValueChange(e)} />


                        </div>

                 


                    </div>




                </div>




            </div>
        );
    }
}




export default App