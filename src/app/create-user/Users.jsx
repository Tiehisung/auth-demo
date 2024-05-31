export default function DisplayUsers({
  users = [{ fullname: "", email: "" }],
}) {
  return (
    <div className="bg-white p-2 pb-9">
      <h1>All users</h1>
      <br />
      <ol className="border">
        <li className="grid gap-2 grid-cols-2 border text-gray-500 p-1 bg-gray-100">
          <span>Fullname</span>
          <span>Email</span>
        </li>
        {users?.map((user, index) => (
          <li key={index} className="grid gap-2 grid-cols-2 border-b p-1">
            <span>
              {index + 1} {user.fullname}
            </span>{" "}
            <span className="font-lighter">{user.email}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
