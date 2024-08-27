import React, { createContext, useContext, useState } from "react";

export const CreateContextFunc = createContext();

const ContextFunc = ({ children }) => {
  console.log(children);
  const contextValue = "context data";

  return (
    <CreateContextFunc.Provider value={contextValue}>
      {children}
    </CreateContextFunc.Provider>
  );
};

export default ContextFunc;

export const ParentFunc = () => {
  const contextData = useContext(CreateContextFunc);
  console.log(contextData);
  const props = "value";

  const [chilData, setChildData] = useState('');


  const LiftingStateUp = (value) => {
    console.log(value);
    setChildData(value)
  };

  return (
    <div>
      <h1>ParentFunc - {chilData}</h1>
      <ChildFunc props={props} LiftingState={LiftingStateUp} />
    </div>
  );
};

const ChildFunc = ({ props, LiftingState }) => {
    
  return (
    <div>
      <h1>ChildFunc</h1>
      <button onClick={() => LiftingState("hello from child component")}>
        Child button
      </button>
    </div>
  );
};

const GrandChildFunc = ({ props }) => {
  return (
    <div>
      <h1> GrandChildFunc</h1>
      <GreatGrandChildFunc props={props} />
    </div>
  );
};

const GreatGrandChildFunc = ({ props }) => {
  const contextData = useContext(CreateContextFunc);
  console.log(props);
  return <div>GreatGrandChildFunc - {contextData}</div>;
};
