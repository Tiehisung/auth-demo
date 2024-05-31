import NewUserForm from "./NewUserForm";
import DisplayUsers from "./Users";

export const getUsers = async () => {
  const response = await fetch("http://localhost:3000/api/users", {
    cache: "no-cache",
  });
  const result = await response.json();
  return result;
};

export default async function CreateUserPage() {
  const users = await getUsers();
  return (
    <div>
      <h1>Only admins!</h1>

      <NewUserForm />
      <DisplayUsers users={users} />
    </div>
  );
}
