import React from "react";
import profileIcon from "../../assets/images/profile.png";

function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-3" >
      <a
        href="#"
        className="nav-link nav-profile d-flex align-items-center pe-0"
        // data-bs-toggle="dropdown"
      >
        <img src={profileIcon} className="profileDp" alt="profile" className="rounded-circle" />
        <span className="">
          Json Taylor
        </span>
      </a>
    </li>
  );
}

export default NavAvatar;
