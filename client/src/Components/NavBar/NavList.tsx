import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pagesInterface from "../../Interfaces/pagesInterface";
import { selectPage, setLoader } from "../../Actions";

const NavList = () => {
  const pages = useSelector((state: pagesInterface) => state.navigation.pages);
  const selectedPage = useSelector(
    (state: pagesInterface) => state.navigation.currentPage
  );

  const dispatch = useDispatch();

  return (
    <div>
      {pages.map((page: string) => {
        const selected = page === selectedPage ? "selected" : "";

        return (
          <Link
            key={page}
            to={`/${page.toLowerCase()}`}
            onClick={() => {
              dispatch(selectPage(page));
              dispatch(setLoader(true));
            }}
            className={`nav-bar__menu-list__item ${selected}`}
          >
            <div className={`nav-bar__menu-list__item__bar ${selected}`} />
            <div className={`icon ${page.toLowerCase()}-icon ${selected}`} />
            <p className={`p2 ${selected} medium-font`}>{page}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavList;
