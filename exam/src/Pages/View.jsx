import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewRecord } from "../redux/actions/examAction";
import { Link, useNavigate } from "react-router-dom";
import { DeleteRecord } from "../redux/actions/examAction";
const View = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const allrec = useSelector((state) => state.userlist.userlist);
  console.log(allrec);

  useEffect(() => {
    dispatch(ViewRecord());
  }, []);
  return (
    <div className="col-9 mx-auto py-5">
      <table className="table table-info table-border table-hover text-center">
        <thead>
          <tr>
            {/* <th scope="col">Id</th> */}
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">CITY</th>
            <th scope="col">SALARY</th>
            <th scope="col">DESIGNATION</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {allrec.map((i) => {
            return (
              <tr key={i.id}>
                {/* <th scope="row">{i.id}</th> */}
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.password}</td>
                <td>{i.city}</td>
                <td>{i.salary}</td>
                <td>{i.designation}</td>
                <td>
                  <button
                    className="btn bg-danger text-white"
                    key={i.id}
                    onClick={() => dispatch(DeleteRecord(i.id))}
                  >
                    Delete
                  </button>
                  <button
                    className="btn bg-warning mx-2 text-white"
                    onClick={() => nav("/Edit", { state: i })}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn-info btn">
        <Link to={"/"} className="text-white">
          Add
        </Link>
      </button>
    </div>
  );
};

export default View;
