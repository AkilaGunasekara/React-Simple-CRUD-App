import { type } from "os";
import "./EmployeeModalStyle.css";
import { IEmployee } from "./Employee";

type Props = {
    onClose: () => void;
    data : IEmployee;
};

const EmployeeModal = (props : Props) => {
    const {onClose,data} = props;


    return(
    <div>
       <div id="myModal" className="modal">

<div className="modal-content">
  <span className="close" onClick={onClose}>&times;</span>
  <div>
    <h3>Employee Details</h3>
    <div>
        <div>
            <label>First Name : {data.firstname}</label>
        </div>
        <div>
             <label>Last Name : {data.lastname}</label>
        </div>
        <div>
             <label>Location : {data.location}</label>
        </div>
        <div>
            <label>Email : {data.email}</label>
        </div>
        <div>
            <label>Mobile : {data.mobile}</label>
        </div>
        
       
       
        
        
    </div>
  </div>
</div>

</div>
        
    </div>
)};
    
export default EmployeeModal;