import React from "react";
import "./Header.scss";

interface HeaderProps {
  page: string;
}

const Header = ({ page }: HeaderProps) => {
  return (
    <div className="header">
      <h6>{page}</h6>
    </div>
  );
};

export default Header;
