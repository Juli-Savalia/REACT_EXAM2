import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddRecord, EditRecord } from "../redux/actions/examAction";
import { Link, useLocation } from "react-router-dom";
import View from "./View";
const Edit = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [city, setCity] = useState("");
  const [designation, setDesignation] = useState("");

  const dispatch = useDispatch();
  const location = useLocation()

  useEffect(() => {
    setCity(location?.state?.city)
    setDesignation(location?.state?.designation)
    setEmail(location?.state?.email)
    setPassword(location?.state?.password)
    setName(location?.state?.name)
    setSalary(location?.state?.salary)
  }, [location.state])

  const handleSubmit = (h) => {
    h.preventDefault();

    let obj = {
      id: location.state.id,
      email: email,
      password: password,
      name: name,
      salary: salary,
      city: city,
      designation: designation,
    };

    dispatch(EditRecord(obj));
    alert("Record Edited Successfully..");
    setEmail("");
    setCity("");
    setDesignation("");
    setName("");
    setPassword("");
    setSalary("");
  };


  return (
    <div className="py-5">
      <h1 className="text-center">EDIT</h1>
      <form className="col-9 mx-auto py-5" onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name :
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
          />
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email || ""}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            value={password || ""}
          />
        </div>
        {/* city */}
        <div className="mb-3">
          <label htmlFor="city" className="d-block py-2 ">
            Select Your City
          </label>
          <select
            className="w-100 p-2 form-control"
            onChange={(e) => setCity(e.target.value)}
            value={city || ""}
          >
            <option value="">Jamanagr</option>
            <option value="">Surat</option>
            <option value="">Rajkot</option>
            <option value="">Ahemdabad</option>
            <option value="">Mumbai</option>
            <option value="">Bhavnagar</option>
            <option value="">Vadodara</option>
          </select>
        </div>
        {/* salary  */}
        <div className="mb-3">
          <label htmlFor="salary" className="d-block py-2">
            Enter Your Salary
          </label>
          <input
            type="tel"
            className="form-control"
            id=""
            onChange={(e) => setSalary(e.target.value)}
            value={salary || ""}
          />
        </div>
        {/* designation */}
        <div className="mb-3">
          <label htmlFor="designtion" className="d-block py-2">
            Enter Your Designation
          </label>
          <input
            type="text"
            className="w-100 form-control"
            id=""
            onChange={(e) => setDesignation(e.target.value)}
            value={designation}
          />
        </div>
        {/* checkbox */}
        <div className="mb-3 form-check py-5">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button>
          <Link to={"/View"}>View</Link>
        </button>
      </form>
    </div>
  );
};

export default Edit;
