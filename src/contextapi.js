import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export const UseProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <UserContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </UserContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(UserContext);
};
