import { useState } from "react";
import "./HomeStyle.css";
import { IEmployee, PageEnum, dummyData } from "./Employee";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";


const Home=()=>{ 
    
    const[employeeList,setEmployeeList]= useState(
        dummyData as IEmployee[]
        
        );

    const [showemployee,setShowemployee]=useState(PageEnum.list);

    const onAddEmployeeClickHnd=()=>{
        setShowemployee(PageEnum.add);

    };

    const showListPage=()=>{
        setShowemployee(PageEnum.list);
    };

    const addEmployee=(data: IEmployee)=>{
        setEmployeeList([...employeeList,data]);
        setShowemployee(PageEnum.list);
    };

    const deleteEmployee=(data: IEmployee)=>{

        const indexToDelete=employeeList.indexOf(data);
        const temList=[...employeeList];

        temList.splice(indexToDelete,1);

        setEmployeeList(temList);
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
                    <EmployeeList list={employeeList} onDelete={deleteEmployee}/>
                </> 
)}
                {showemployee===PageEnum.add && <AddEmployee onBack={showListPage} onsubmitClickHnd={addEmployee}/> }

            </section>
        </>
    );

}
export default Home;
