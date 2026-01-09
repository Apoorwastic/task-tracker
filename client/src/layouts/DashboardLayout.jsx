export default function DashboardLayout({ children }) {
  return (
    <div className="main-layout">
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}
