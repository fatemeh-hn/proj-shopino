import React, { useEffect } from "react";
import { GET_USER } from "../api/user";
import { useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "../hooks/useLocalstorage";

function Profile() {
  const [storedUser, setStoredUser] = useLocalStorage("user", null);

  const {
    data: user,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["me"],
    queryFn: GET_USER,
  });
  useEffect(() => {
    if (user) {
      storedUser(user);
    }
  }, [user, setStoredUser]);

  const profile = user ?? storedUser;

  if (isPending && !profile) {
    return <p>loading profile ...</p>;
  }

  if (isError && !profile) {
    return <p>unable to load your profile.</p>;
  }

  return <div>Profile</div>;
}

export default Profile;
