import { logout } from "../utils/auth";

export default function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <aside className="sidebar">
      {/* LOGO */}
      <div className="logo">
        <div className="logo-icon">📋</div>
        <span>Task Tracker</span>
      </div>

      {/* NAV */}
      <nav className="nav-links">
  <span className="active">Dashboard</span>

  <button className="logout-btn secondary" onClick={logout}>
    Logout
  </button>
</nav>


      {/* USER */}
      <div className="user-box">
        <div className="avatar">{user?.name?.[0] || "A"}</div>
        <span>{user?.name || "User"}</span>
      </div>
    </aside>
  );
}
