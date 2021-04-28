import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import BarChartIcon from "@material-ui/icons/BarChart";
import "../css/parentNav.css";
function ParentNavigationBar() {
  return (
    <div className="parent__navigation__bar__container">
      <ul>
        <li>
          <div className="Pnav__logo__container">
            <DashboardIcon style={{ color: "white" }} />
          </div>
          <p>Dashboard</p>
        </li>
        <li>
          <div className="Pnav__logo__container">
            <DescriptionOutlinedIcon style={{ color: "white" }} />
          </div>
          <p> Reports</p>
        </li>
        <li className="active">
          <div className="Pnav__logo__container ">
            <SettingsIcon />
          </div>
          <p> Settings</p>
        </li>

        <li>
          <div className="Pnav__logo__container">
            <BarChartIcon style={{ color: "white" }} />
          </div>
          <p> Statistics</p>
        </li>
      </ul>
    </div>
  );
}

export default ParentNavigationBar;
