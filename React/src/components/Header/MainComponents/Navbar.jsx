import React, { useContext } from "react";
import { GlobalContextFucntion } from "../UseContext/ContextFunction";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(GlobalContextFucntion);
  return (
    <div className="fixed left-40 top-0 w-[calc(100vw-160px)] h-20 bg-yellow-100 p-6 flex justify-end items-center">
      {isLoggedIn ? (
        <h1
          className="px-4 py-2 rounded text-white bg-blue-500 cursor-pointer"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          Log out
        </h1>
      ) : (
        <h1
          className="px-4 py-2 rounded text-white bg-blue-500 cursor-pointer"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          Login in
        </h1>
      )}
    </div>
  );
};

export default Navbar;
