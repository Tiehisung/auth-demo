import { getServerSession } from "next-auth";
import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";

export default async function Nav() {
  const session = await getServerSession(options);

  return (
    <div>
      <header className="text-gray-100 bg-gray-600">
        <nav className="flex px-10 py-4 justify-between items-center w-full">
          <div>My Site</div>
          <div className="flex gap-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/create-user"}>Create User</Link>
            <Link href={"/client-member"}>Client Member</Link>
            <Link href={"/member"}>Member</Link>
            <Link href={"/Public"}>Public</Link>

            {session ? (
              <Link
                href={"http://localhost:3000/api/auth/signout?callbackUrl=/"}
              >
                Logout
              </Link>
            ) : (
              <Link href={"http://localhost:3000/api/auth/signin"}>Login</Link>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
