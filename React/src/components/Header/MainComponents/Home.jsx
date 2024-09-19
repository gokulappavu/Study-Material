import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const data = [
    { title: "Users", path: "/users" },
    { title: "Staffs", path: "/staffs" },
    { title: "Sellers", path: "/sellers" },
  ];

  return (
    <div className=" w-full h-20 bg-red-500 flex gap-10 justify-end items-center px-5">
      <div className="flex gap-4 items-center justify-center">
        {data?.map((val, id) => (
          <Link
            to={val.path}
            key={id}
            className={`w-full px-4 py-2 text-center rounded ${
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

const Foot = () => {
  return <div className=" w-full h-40 bg-yellow-500 flex">Font</div>;
};

// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <Sidebar />
//       <div className="fixed top-20 left-40 w-[calc(100vw-160px)] h-auto">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

const Home = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col">
      <Nav />
      <div className="w-full flex-1">
        <Outlet />
      </div>
      <Foot />
    </div>
  );
};

export default Home;
