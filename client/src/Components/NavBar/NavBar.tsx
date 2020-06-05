import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavList from './NavList';
import "./NavBar.scss";

const NavBar = () => {

  const retailerCount = 3;
  const productCount = 1400;

  const adminName = "Abdul Hannan";
  const dispatch = useDispatch();

  return (
    <div className="nav-bar">
      <div className="nav-bar__profile">
        <div className="nav-bar__profile__avatar">
          <h6>{adminName.split(' ')[0][0] + adminName.split(' ')[1][0]}</h6>
        </div>
        <div className="nav-bar__profile__text">
          <p className="p1 medium-font">{adminName}</p>
          <a
            className="primary_link"
            href="/"
            onClick={() => console.log("log-out function")}
          >
            Sign out
          </a>
        </div>
      </div>
      <div className="nav-bar__info">
        <div className="flex-row">
          <div className="nav-bar__info__item">
            <h4>{retailerCount}</h4>
            <p className="cap medium-font">RETAILERS</p>
          </div>
          <div className="nav-bar__info__divider_vertical" />
          <div className="nav-bar__info__item">
            <h4>{productCount}</h4>
            <p className="cap medium-font">PRODUCTS</p>
          </div>
        </div>
        <div className="nav-bar__info__divider_horizontal" />
      </div>
      <div className="nav-bar__menu-list">
        <p className="cap medium-font">MAIN MENU</p>
        <NavList/>
      </div>
    </div>
  );
};

export default NavBar;
