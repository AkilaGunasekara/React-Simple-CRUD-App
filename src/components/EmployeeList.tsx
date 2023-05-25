import { type } from "os";
import "./EmployeeListStyle.css";
import { IEmployee } from "./Employee";

import { useState } from "react";
import EmployeeModal from "./EmployeeModal";


type Props = {
    list: IEmployee[]
    onDelete: (data: IEmployee) => void;
}

const EmployeeList = (props : Props) => {

    const {list,onDelete} = props;

    const onDeleteClickHnd = (data: IEmployee) => {
        onDelete(data);
    };

    const [showModal, setShowModal] = useState(false); 

    const [dataToShow, setDataToShow] = useState<IEmployee | null>(null);

    const onView = (data: IEmployee) => {
        setShowModal(true);
        setDataToShow(data);
    };

    const onCloseModal = () => {
        setShowModal(false);
    };



    return (
        <div>
            <h3>Employee List</h3>

            <table>
    <tr>
      <th>Name</th>
      <th>Location</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Action</th>
    </tr>

    {list.map((employee) => {
        return (
            <tr key={employee.id}>
                 <td>{`${employee.firstname} ${employee.lastname}`}</td>
                <td>{employee.location}</td>
                <td>{employee.email}</td>
                <td>{employee.mobile}</td>
                <td>
                    <button onClick={() => onView(employee)}>View</button>
                    <button>Edit</button>   
                    <button onClick={() => onDelete(employee)}>Delete</button>
                </td>
            </tr>
        );
    })}
    
  </table>
   
  {showModal && dataToShow !== null && 
  <EmployeeModal onClose={onCloseModal} data={dataToShow}/>}


        </div>
    );
}
export default EmployeeList;