import React from "react";
import "./ManageUserData.css";
import { useState, useEffect } from "react";
import { fetchUsers } from "../../Data/UserData";

function ManageUserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const sortedUsers = fetchUsers().sort((a, b) =>
      a.username.localeCompare(b.username)
    );
    setUsers(sortedUsers);
  }, []);

  return (
    <div className="ManageUserData-container">
      <div className="filters-container">
        <select
          class="form-select"
          aria-label="Default select example"
          style={{ width: "200px" }}
        >
          <option selected disabled>
            Selected User/Driver
          </option>
          <option value="1">User</option>
          <option value="2">Driver</option>
        </select>

        <input
          class="form-control"
          placeholder=" Username"
          style={{ width: "200px" }}
        ></input>
        <span>
          <i class="bi bi-search"></i>
        </span>
      </div>

      <div className="Table-container">
        <table className="table  table-hover table-striped ">
          <thead className="table table-dark">
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>ประเภทผู้ใช้</th>
              <th>สถานะผู้ใช้งาน</th>
              <th>วันที่สมัคร</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.role === "user" ? "User" : "Driver"}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>{new Date(user.registrationDate).toLocaleDateString()}  </td>
                <td><span className="badge bg-danger"><i class="bi bi-trash " style={{fontSize: "20px", cursor: "pointer" }}></i></span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageUserData;
