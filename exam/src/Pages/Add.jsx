import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddRecord } from "../redux/actions/examAction";
import { Link } from "react-router-dom";
import View from "./View";
const Add = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [city, setCity] = useState("");
  const [designation, setDesignation] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (h) => {
    h.preventDefault();
    console.log(email, password, name, salary, city, designation);

    let obj = {
      id: Date.now(),
      email: email,
      password: password,
      name: name,
      salary: salary,
      city: city,
      designation: designation,
    };

    dispatch(AddRecord(obj));
    alert("Record Added Successfully..");
    setEmail("");
    setCity("");
    setDesignation("");
    setName("");
    setPassword("");
    setSalary("");
  };

  return (
    <div className="py-2">
      <h3 className="text-center">ADD RECORDS</h3>
      <form className="col-9 mx-auto p-5 bg-secondary" onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-3">
          <label
            style={{ color: "white" }}
            htmlFor="name"
            className="form-label"
          >
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
          <label
            style={{ color: "white" }}
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
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
          <label
            style={{ color: "white" }}
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
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
          <label
            style={{ color: "white" }}
            htmlFor="city"
            className="d-block py-2 "
          >
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
          <label
            style={{ color: "white" }}
            htmlFor="salary"
            className="d-block py-2"
          >
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
          <label
            style={{ color: "white" }}
            htmlFor="designtion"
            className="d-block py-2"
          >
            Enter Your Designation
          </label>
          <input
            type="text"
            className="w-100 form-control"
            id=""
            onChange={(e) => setDesignation(e.target.value)}
            value={designation || ""}
          />
        </div>
        {/* checkbox */}
        <div className="mb-3 form-check py-5">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label
            style={{ color: "white" }}
            className="form-check-label"
            htmlFor="exampleCheck1"
          >
            Check me out
          </label>
        </div>
        <button type="submit" className="btn bg-white">
          Submit
        </button>
        <button className="btn bg-white mx-3">
          <Link to={"/View"} className="text-dark">
            View
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Add;
