import React from "react";
import "../css/childNav.css";
function ChildNavigationBar() {
  return (
    <div className="child__navigation__bar__container">
      <ul>
        <li>General</li>
        <li className="activeChild">Widget</li>
        <li>Privacy</li>
        <li>Rules</li>
        <li>Users</li>
        <li>Teams</li>
        <li>Skills</li>
        <li>Library</li>
        <li>Account</li>
      </ul>
    </div>
  );
}

export default ChildNavigationBar;
