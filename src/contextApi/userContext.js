import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const getLocalStorage = () => {
    let user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return [];
    }
  };

  const [list, setList] = useState("");
  const [user, setUser] = React.useState(getLocalStorage());

  return (
    <UserContext.Provider value={{ user, setUser, list, setList }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
