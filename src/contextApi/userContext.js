import React, { useContext, useState } from "react";
const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [list, setList] = useState("");
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser, list, setList }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
