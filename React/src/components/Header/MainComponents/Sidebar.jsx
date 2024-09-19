import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const data = [
    { title: "Users", path: "/users" },
    { title: "Staffs", path: "/staffs" },
    { title: "Sellers", path: "/sellers" },
  ];

  const stateData = "State data from Link";

  return (
    <div className="fixed w-40 top-0 bg-blue-100 h-screen">
      <div className="w-full h-20 grid place-content-center">Sidebar</div>
      <div className="w-full p-5 flex flex-col gap-4 items-center justify-center">
        {data?.map((val, id) => (
          <Link
            to={val.path}
            key={id}
            state={stateData}
            className={`w-full py-2 text-center rounded ${
              location.pathname == val.path ? "bg-green-300" : "bg-red-300"
            } `}
          >
            <h1>{val.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
