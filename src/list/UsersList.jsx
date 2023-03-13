import { useState, useEffect } from "react";
import { Role } from "../models/role";
import AdminService from "../services/admin.service";

const UsersList = () => {
  const [userlist, setUserList] = useState([]);
  const [infoMessage, setInfoMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    console.log("use effect1");
    AdminService.showUsers().then((response) => {
      setUserList(response.data);
    });
  }, []);

  const removeUser = (id) => {
    AdminService.deleteUser(id)
      .then((response) => {
        setInfoMessage("user deleted successfully");
      })

      .catch((error) => {
        console.log(error);
        setErrorMessage("unexpected error occured");
      });
  };

  return (
    <div className="container mx-5 my-3">
      <h2>Lists of Users are as follows:</h2>

      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      {infoMessage && <div className="alert alert-success">{infoMessage}</div>}

      <div className="d-flex flex-wrap">
        {userlist.map((item, ind) =>
          item.role == Role.ADMIN ? (
            ""
          ) : (
            <div key={item.user_id} className="card m-3 home-card">
              <div className="card-body">
                <div className="card-title text-uppercase">
                  Name : {item.fname} {item.lname}
                </div>
                <div className="card-title text-uppercase">
                  DOB : {item.dob}
                </div>
                <div className="card-subtitle text-muted">
                  Email : {item.email}
                </div>
                <div className="card-subtitle text-muted">
                  Gendeer : {item.gender}
                </div>
                <div className="card-subtitle text-muted">
                  City : {item.city}
                </div>
                <div className="card-subtitle text-muted">
                  Contact : {item.contact}
                </div>
                <div className="card-subtitle text-muted">
                  Role : {item.role}
                </div>
                <br />
              </div>

              <div className="row mt-2 p-3">
                <div className="col-6">
                  <button
                    className="btn btn-outline-success w-100"
                    onClick={() => removeUser(item.user_id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default UsersList;
