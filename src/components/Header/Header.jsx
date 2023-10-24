import "./Header.css";

import img from "./logo.png";

const Header = (props) => {
  return (
    <div className="Header">
      <img src={img} alt="logo-coder" />
    </div>
  );
};

export default Header;
