import { useSelector } from "react-redux";
import { PersonSquare } from "react-bootstrap-icons";

const UserDetails = () => {
  const currentUser = useSelector((state) => state.user);

  return (
    <div>
      <h2>
        <PersonSquare />
        &nbsp;&nbsp;
        {currentUser?.fname} {currentUser?.lname}
      </h2>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">Email : {currentUser?.email}</li>
        <li class="list-group-item">City : {currentUser?.city}</li>
        <li class="list-group-item">Contact : {currentUser?.contact}</li>
      </ul>
    </div>
  );
};

export default UserDetails;
