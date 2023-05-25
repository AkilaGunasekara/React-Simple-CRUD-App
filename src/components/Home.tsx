import { useEffect, useState } from "react";
import "./HomeStyle.css";
import { IEmployee, PageEnum, dummyData } from "./Employee";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";


const Home=()=>{ 
    
    const[employeeList,setEmployeeList]= useState(
        dummyData as IEmployee[]
        
        );

    const [showemployee,setShowemployee]=useState(PageEnum.list);
    
    const [dataToEdit,setDataToEdit]=useState({} as IEmployee);

    useEffect(() => {
        const listInString = window.localStorage.getItem("EmployeeList");
        if (listInString) {
          _setEmployeeList(JSON.parse(listInString));
        }
      }, []);



    const onAddEmployeeClickHnd=()=>{
        setShowemployee(PageEnum.add);

    };

    const showListPage=()=>{
        setShowemployee(PageEnum.list);
    };

    const _setEmployeeList = (list: IEmployee[]) => {
        setEmployeeList(list);
        window.localStorage.setItem("EmployeeList", JSON.stringify(list));
      };

    const addEmployee=(data: IEmployee)=>{
        setEmployeeList([...employeeList,data]);
       
    };

    const deleteEmployee=(data: IEmployee)=>{

        const indexToDelete=employeeList.indexOf(data);
        const temList=[...employeeList];

        temList.splice(indexToDelete,1);

        _setEmployeeList(temList);
    };

    const editEmployeeData=(data: IEmployee)=>{
        setShowemployee(PageEnum.edit);
        setDataToEdit(data);

    };

    const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    _setEmployeeList(tempData);
  };

    return(
        <>
            <article className="article-header">
                <header>
                    <h1>React Simple CRUD Application</h1>
                </header>
            </article>

            

            <section className="section-content">
                {showemployee===PageEnum.list && (
                <>
                    <button className="Add-emp" onClick={onAddEmployeeClickHnd}>Add Employee</button>
                    <EmployeeList list={employeeList} onDelete={deleteEmployee} onEdit={editEmployeeData}/>
                </> 
)}
                {showemployee===PageEnum.add && <AddEmployee onBack={showListPage} 
                onsubmitClickHnd={addEmployee}/> }

                {showemployee === PageEnum.edit && <EditEmployee data={dataToEdit} 
                onBack={showListPage} onUpdateClickHnd={updateData}/>}

        
            </section>
        </>
    );

}
export default Home;
