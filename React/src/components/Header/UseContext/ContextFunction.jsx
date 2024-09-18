import React, { createContext, useContext, useState } from "react";

export const GlobalContextFucntion = createContext();

// const Test = () => {
//   const contextData = useContext(GlobalContextFucntion);
//   return <h1>Test- {contextData}</h1>;
// };

// const Test2 = () => {
//   const contextData = useContext(GlobalContextFucntion);
//   return <h1>Test 2- {contextData}</h1>;
// };

export const ContextComponent = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const contextValue = { isLoggedIn, setIsLoggedIn };

  return (
    <GlobalContextFucntion.Provider value={contextValue}>
      {children}
    </GlobalContextFucntion.Provider>
  );
};
