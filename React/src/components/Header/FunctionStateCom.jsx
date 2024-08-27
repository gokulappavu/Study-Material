import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FunctionStateCom = () => {
  const [state, setState] = useState([]);
  const { id } = useParams();

  //component did mount
  useEffect(() => {
    console.log("component did mount");
  }, []);

  //component did update
  useEffect(() => {
    console.log("component did update");
  }, [state]);

  //component will unmmount
  useEffect(() => {
    return () => {
      console.log("component will unmount");
    };
  }, []);

  return (
    <div>
      <h1>Function state Component - {id}</h1>
      <button onClick={() => setState([])}>Update State</button>
    </div>
  );
};

export default FunctionStateCom;
