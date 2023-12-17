import "./app-filter.css";

function AppFilter({filter, onFilterSelect}){
    const buttonsData = [
        {name: "all", label: "Все сотрудники"},
        {name: "more", label: "З/П больше 1000$"},
        {name: "promoted", label: "Сотрудники на повышение"},
    ];

    const buttons = buttonsData.map(({name, label}, i) => {
        const active = filter === name;
        const clazz = active ? "btn btn-light" : " btn btn-outline-light";

        return (
            <button onClick={() => {onFilterSelect(name)}} key={name} name={name} type="button" className={clazz}>{label}</button>
        )
    });


    return (

        <div  className="btn-group">

            {buttons}

        </div>
    )
}


export default AppFilter