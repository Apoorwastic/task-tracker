export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">✔ Task Tracker</div>

      <nav>
        <a className="active">Dashboard</a>
        <a>All Tasks</a>
        <a>Completed</a>
        <a>Pending</a>
      </nav>
    </aside>
  );
}
