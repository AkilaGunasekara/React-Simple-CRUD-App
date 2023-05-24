import { type } from "os";
import "./EmployeeListStyle.css";
import { IEmployee } from "./Employee";


type Props = {
    list: IEmployee[]
}

const EmployeeList = (props : Props) => {

    const {list} = props;


    return (
        <div>
            This is employee list page.

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
                    <button>View</button>
                    <button>Edit</button>   
                    <button>Delete</button>
                </td>
            </tr>
        );
    })}
    
  </table>



        </div>
    );
}
export default EmployeeList;