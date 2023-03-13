import { useSelector } from "react-redux";
import { PersonSquare } from "react-bootstrap-icons";

const AdminDetails = () => {
  const currentAdmin = useSelector((state) => state.user);

  return (
    <div>
      <h2>
        <PersonSquare />
        &nbsp;&nbsp;
        {currentAdmin?.fname} {currentAdmin?.lname}
      </h2>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">Email : {currentAdmin?.email}</li>
        <li class="list-group-item">City : {currentAdmin?.city}</li>
        <li class="list-group-item">Contact : {currentAdmin?.contact}</li>
      </ul>
    </div>
  );
};

export default AdminDetails;
