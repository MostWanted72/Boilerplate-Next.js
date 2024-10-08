import paths from "@/lib/paths";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default async function Header() {
  const session = await getSession();

  return (
    <div className="flex justify-between p-4 bg-slate-400">
      <div>
        <Link href={paths.landingPage}>
          <h1>To Do List</h1>
        </Link>
      </div>
      {!session ? (
        <div className="flex gap-4">
          <Link href={paths.auth.login}>Login</Link>
        </div>
      ) : (
        <div className="flex gap-4">
          <div>{session.user.name}</div>
          <Link href={paths.auth.logout}>Log Out</Link>
        </div>
      )}
    </div>
  );
}
