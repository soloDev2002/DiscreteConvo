import React from "react";
import logo from "../images/logo.png";
import burger from "../images/burger.jpg";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";
import zenitsu from "../images/Zenitsu.jpg";
import "../css/header.css";
function Header() {
  return (
    <div className="header__container">
      <div className="logo__container">
        <img src={logo} alt="logo" />
      </div>
      <div className="break">
        <div className="burger__container">
          <img src={burger} alt="burger" />
        </div>
        <p>Break</p>
        <div className="arrow" />
      </div>
      <div className="notification">
        <NotificationsNoneIcon style={{ fontSize: "1.6rem" }} />
      </div>
      <div className="user__info">
        <div className="avatar__icon">
          <Avatar src={zenitsu} />
        </div>
        <p>John Doe</p>
        <div className="arrow" />
      </div>
    </div>
  );
}

export default Header;
