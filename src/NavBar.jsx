import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const amount = useSelector(state=>state.amount)
  return (
    <nav className="navbar navbar-expand-lg  bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white " href="#">BANK</a>
    <button className="navbar-toggler btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bg-dark color-white" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a className="nav-link text-white" href="#">Features</a>
      </div>
    </div>
    <button type="button" className=" btn btn-primary ">Balnce : {amount}</button>
  </div>
</nav>
  );
};

export default NavBar;
