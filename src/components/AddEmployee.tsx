import { useState } from "react";
import "./EmployeeFormStyle.css"
import { IEmployee } from "./Employee";

type props={
    onBack:()=>void;
    onsubmitClickHnd:(data: IEmployee)=>void;
}

const AddEmployee = (props: props) => {

    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[location,setLocation]=useState("");   
    const[email,setEmail]=useState("");
    const[mobile,setMobile]=useState("");
    
        const{onBack}=props;

        const onFirstNamechangeHnd=(e: any)=>{
            setFirstName(e.target.value);
        };
        const onLastNamechangeHnd=(e: any)=>{
            setLastName(e.target.value);
        };
        const onlocationchangeHnd=(e: any)=>{
            setLocation(e.target.value);
        };
        const onemailchangeHnd=(e: any)=>{
            setEmail(e.target.value);
        };
        const onmobilechangeHnd=(e: any)=>{
            setMobile(e.target.value);
        };
        const onsubmitClickHnd=(e: any)=>{
            const data: IEmployee={

                id:new Date().toJSON().toString(),
                firstname: firstName,    
                lastname:lastName,
                location:location,
                email:email,
                mobile:mobile
            };
            props.onsubmitClickHnd(data);

        }



    return (
        <div className="form-container">
    <div>
        <h2>Add Employee Form</h2>
    </div>

    <div>
        <form onSubmit={onsubmitClickHnd}>
            <div>
            <label>First Name</label>
            <input type="text" name="firstname" value={firstName} onChange={onFirstNamechangeHnd}/>
            </div>
            <div>
            <label>Last Name</label>
            <input type="text" name="lastname" value={lastName} onChange={onLastNamechangeHnd}/>
            </div>
            <div>
            <label>Location</label>
            <input type="text" name="location" value={location} onChange={onlocationchangeHnd}/>
            </div>
            <div>
            <label>Email</label>
            <input type="text" name="email" value={email} onChange={onemailchangeHnd}/>
            </div>
            <div>
            <label>Mobile</label>
            <input type="text" name="mobile" value={mobile} onChange={onmobilechangeHnd}/>
            </div>
            <div>
                <button type="submit">Add Employee</button>
                <button onClick={onBack} type="button">Back</button>
            </div>
        </form>
    </div>
    </div>
    
       )
    
    
    
};

export default AddEmployee;