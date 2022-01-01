import axios from "axios";
import React from "react";
import { useUserContext } from "../../contextApi/userContext";
import UserModal from "./UserModal";

function UserProfile() {
  const [showModal, setShowModal] = React.useState(false);
  const [userdetails, setUserDetails] = React.useState("");
  const { user } = useUserContext();

  React.useEffect(() => {
    if (user.length !== 0) {
      const id = Object.values(user)[0];
      axios.get(`http://localhost:4000/api/patient/${id}`).then((res) => {
        setUserDetails(res.data);
      });
    }
  }, [user]);

  console.log(userdetails);
  if (showModal) {
    return <UserModal showModal={showModal} setShowModal={setShowModal} />;
  }
  return (
    <div class="w-3/5 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        class="object-cover object-fit w-full h-32"
        src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/210/Profile-Icon.png"
        alt="avatar"
      />

      <div class="flex items-center px-6 py-3 bg-gray-900">
        <h2 class="mx-3 text-md font-semibold text-white">Patient Details</h2>
      </div>

      <div class="px-6 py-4">
        <div className="flex flex-col text-sm gap-y-3">
          <div>
            <span className="font-bold">Name: </span>{" "}
            {`${userdetails.first_name} ${userdetails.last_name}`}
          </div>
          <div>
            <span className="font-bold">Phone: </span>
            {userdetails.phone}
          </div>
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Email: </span> {userdetails.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
