import React from "react";
import { useState } from "react";

const ListandKeys = () => {
    
  const initialState = [
    { name: "vignesh", id: 1, email: "vignesh@gmail.com" },
    { name: "vimal", id: 2, email: "vimal@gmail.com" },
    { name: "vicky", id: 3, email: "vicky@gmail.com" },
  ];

  const [state, setState] = useState(initialState);

  return (
    <div style={{ marginLeft: "30px" }}>
      <ul>
        {state?.length >= 1 ? (
          state?.map((value, index) => (
            <React.Fragment key={value.id}>
              <li>{value.email}</li>
              <li>{value.name}</li>
            </React.Fragment>
          ))
        ) : (
          <h1>Not found</h1>
        )}
      </ul>
    </div>
  );
};

export default ListandKeys;
