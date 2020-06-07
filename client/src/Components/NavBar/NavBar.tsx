import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavList from "./NavList";
import "./NavBar.scss";
import {
  signout,
  fetchProducts,
  fetchCategories,
  fetchBrands,
  fetchRetailers,
  setLoader,
} from "../../Actions";

const NavBar = () => {

  const adminName = useSelector((state: any) => state.auth.user.username);

  const retailerCount = useSelector(
    (state: any) => Object.values(state.retailers).length
  );

  const productCount = useSelector(
    (state: any) => Object.values(state.products).length
  );
  const dispatch = useDispatch();

  const loadData = useCallback(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    dispatch(fetchRetailers());
    setTimeout(() => dispatch(setLoader(false)), 500);
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="nav-bar">
      <div className="nav-bar__profile">
        <div className="nav-bar__profile__avatar">
          <h6>{adminName.split(" ")[0][0] + adminName.split(" ")[1][0]}</h6>
        </div>
        <div className="nav-bar__profile__text">
          <p className="p1 medium-font">{adminName}</p>
          <a
            className="primary_link"
            href="/"
            onClick={() => dispatch(signout)}
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
        <NavList />
      </div>
    </div>
  );
};

export default NavBar;
