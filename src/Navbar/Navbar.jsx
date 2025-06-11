import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink> </li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/fetch_data">Fetch_data</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;