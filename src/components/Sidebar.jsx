



import { useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "./logo.svg";
// import ".";

// const navItems = ["home", "Assignment", "backup", "mail", "cloud", "layers"];
const navItems = [
    {
        icon: "Assignment",
        route: "register"
    },
    {
        icon: "backup",
        route: "backup"
    },
    {
        icon: "mail",
        route: "mail"
    },
    {
        icon: "cloud",
        route: "cloud"
    },

]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
          {/* <img src={logo} className="sidebar-logo" /> */}
        </header>
        <nav className="sidebar-menu select-none">
          {navItems.map((item) => (
            <NavLink to={item.icon === "home" ? "." : item.route} key={item.icon} type="button" className="sidebar-button" >
              <span className="material-symbols-outlined">{item.icon}</span>
              <p>{item.route}</p>
            </NavLink>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Sidebar