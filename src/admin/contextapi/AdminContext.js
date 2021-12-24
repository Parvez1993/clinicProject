import React, { useContext, useState } from "react";
const AdminContext = React.createContext();
export const AdminProvider = ({ children }) => {
  const [list, setList] = useState("abc");
  return (
    <AdminContext.Provider value={{ list, setList }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};
