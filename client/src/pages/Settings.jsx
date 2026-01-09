export default function Settings() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>Settings</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
