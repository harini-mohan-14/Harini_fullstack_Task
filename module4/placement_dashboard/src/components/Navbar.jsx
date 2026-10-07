import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const handleLogout = () => {
    logout();
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">
        <div className="brand-icon">
          🎓
        </div>

        <div>
          <h2>PlacementPro</h2>
          <p>Student Portal</p>
        </div>
      </div>

      <div className="sidebar-menu">

        <p className="menu-title">
          MAIN MENU
        </p>

        <NavLink to="/dashboard" className={getLinkClass}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/jobs" className={getLinkClass}>
          💼 Jobs
        </NavLink>

        <NavLink to="/applications" className={getLinkClass}>
          📄 My Applications
        </NavLink>

        <NavLink to="/interviews" className={getLinkClass}>
          📅 Interviews
        </NavLink>

        <NavLink to="/notifications" className={getLinkClass}>
          🔔 Notifications
        </NavLink>

        <NavLink to="/profile" className={getLinkClass}>
          👤 Profile
        </NavLink>

      </div>

      <div className="sidebar-footer">

        <div className="student-avatar">
          {user?.name?.charAt(0).toUpperCase() || "S"}
        </div>

        <div>
          <strong>
            {user?.name || "Student"}
          </strong>

          <p>Student</p>
        </div>

      </div>

      <button
        className="logout-button"
        onClick={handleLogout}
      >
        🚪 Logout
      </button>

    </aside>
  );
}

export default Navbar;