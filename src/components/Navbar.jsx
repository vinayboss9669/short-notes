import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <div className="w-full h-[45px] flex justify-between items-center p-4 bg-gray-800">
      {/* Left: Navigation Links */}
      <div className="flex gap-x-5">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold text-xl"
                : "text-white font-medium text-xl"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* Right: Toggle Button */}
      <button
        onClick={toggleTheme}
        className="px-4 py-1 bg-grey-500 text-white rounded hover:bg-blue-700 mr-4 font-bold "
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;