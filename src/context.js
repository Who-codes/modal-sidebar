import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

//costom hook
const useGlobalContext = () => {
  useContext(AppContext);
};

export { useGlobalContext };
