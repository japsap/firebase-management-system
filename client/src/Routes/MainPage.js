import { getAuth } from "firebase/auth";
import React from "react";

import { logOut } from "../Hooks/fire";

const MainPage = () => {

  const { currentUser } = getAuth();

  return (
    <div>
      MainPage <button onClick={logOut}>Log out</button>
      <h1>{currentUser.displayName}</h1>
    </div>
  );
};

export default MainPage;
