import "./app-info.css";

function AppInfo(props){

    const {employeeCount, count, promoted} = props;
    return (
        <div>

            <div onLoad={employeeCount} className="app-info">

                <h1>Учет сотрудников в компании Forte</h1>
                <h2>Общее число сотрудников: {count} </h2>
                <h2>Премию получат: {promoted} </h2>


            </div>

        </div>
    )
}

export default AppInfo;