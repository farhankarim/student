import React from "react";
import { useState,useRef } from "react";
import data from "../data/mock-data.json";
import { nanoid } from "nanoid";

export default function Student() {
  
  const form = useRef(null);
  const [student, setStudent] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const handleAddFormChange = (e) => {
    e.preventDefault();
    const name = e.target.getAttribute("name");
    const val = e.target.value;
    const newFormData = { ...addFormData };
    newFormData[name] = val;
    setAddFormData(newFormData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(2),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...student, newContact];
    setStudent(newContacts);
    
  };
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-6">
          <form onSubmit={handleFormSubmit}>
            <div ref={form} className="form-group">
              <label htmlFor="exampleInputEmail1">Full Name</label>
              <input
                type="text"
                name="fullName"
                onChange={handleAddFormChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Address</label>
              <textarea
                name="address"
                onChange={handleAddFormChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Phone</label>
              <input
                type="text"
                name="phoneNumber"
                onChange={handleAddFormChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                onChange={handleAddFormChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {student.map((item, index) => (
              <tr key={item.id}>
                <td >{++index}</td>
                <td>{item.fullName}</td>
                <td>{item.address}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
