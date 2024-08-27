import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();

  const ActiveColor = location.pathname === "/homepage" ? "green" : "blue";
  const ActiveColor2 =
    location.pathname === "/homepage/login" ? "green" : "blue";

  return (
    <nav
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to={`/homepage`}>
        <h1
          style={{
            padding: "10px",
            backgroundColor: ActiveColor,
            color: "white",
          }}
        >
          Home
        </h1>
      </Link>
      <Link to={`/homepage/login`}>
        <h1
          style={{
            padding: "10px",
            backgroundColor: ActiveColor2,
            color: "white",
          }}
        >
          Login
        </h1>
      </Link>
    </nav>
  );
};

export const Footer = () => {
  return <footer>Footer</footer>;
};

const Homepage = () => {

  const [test, setTest] = useState("testingDatas");
  
  return (
    <div>
      <NavBar />
      <Outlet context={test} />
      <Footer />
    </div>
  );
};

export default Homepage;
