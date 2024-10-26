import React from "react";
import global from "../../assets/global.png";
import onPoint from "../../assets/onpointLogo.png";
import "./Nav.css";
function Nav() {
  const scrollIntoView = () => {
    document.querySelector("#pageone").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav">
      <img className="nav__img" src={global} onClick={() => scrollIntoView()} />
      <img className="nav__comp" src={onPoint} />
    </div>
  );
}

export default Nav;
