import { IEmployee } from "./Employee";
import "./EmployeeFormStyle.css";
import { useState } from "react";

type Props = {
  data: IEmployee;
  onBack: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onUpdateClickHnd, onBack } = props;

  const [firstName, setFirstName] = useState(data.firstname);
  const [lastName, setLastName] = useState(data.lastname);
  const [location, setLocation] = useState(data.location);
  const [email, setEmail] = useState(data.email);
  const [mobile, setMobile] = useState(data.mobile);

  const onFirstNamechangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };
  const onLastNamechangeHnd = (e: any) => {
    setLastName(e.target.value);
  };
  const onlocationchangeHnd = (e: any) => {
    setLocation(e.target.value);
  };
  const onemailchangeHnd = (e: any) => {
    setEmail(e.target.value);
  };
  const onmobilechangeHnd = (e: any) => {
    setMobile(e.target.value);
  };

  const onsubmitClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      firstname: firstName,
      lastname: lastName,
      location: location,
      email: email,
      mobile: mobile,
    };

    onUpdateClickHnd(updatedData);
    onBack();
};
  return (
    <div className="form-container">
      <div>
        <h2>Add Interns Form</h2>
      </div>

      <div>
        <form onSubmit={onsubmitClickHnd}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={onFirstNamechangeHnd}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={lastName}
              onChange={onLastNamechangeHnd}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={onlocationchangeHnd}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onemailchangeHnd}
            />
          </div>
          <div>
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={onmobilechangeHnd}
            />
          </div>
          <div>
            <button type="submit">Update Interns</button>
            <button onClick={onBack} type="button">
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
