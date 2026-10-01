import React, { useEffect } from "react";
import { GET_USER } from "../api/user";

function Profile() {
  useEffect(() => {
    GET_USER();
  }, []);
  return <div>Profile</div>;
}

export default Profile;
