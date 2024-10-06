import Link from "next/link";
import paths from "@/lib/paths";
import { getSession, Session } from "@auth0/nextjs-auth0";

export default async function Header() {
  const session: Session | null | undefined = await getSession();
  return (
    <div className="flex justify-between p-4 bg-slate-400">
      <div>
        <Link href={paths.landingPage}>
          <h1>Flower Garder</h1>
        </Link>
      </div>
      <div className="flex gap-4">
        {session ? (
          <Link
            href={paths.auth.logout as string}
            className="bg-slate-400 rounded cursor-pointer border-"
          >
            Log Out
          </Link>
        ) : null}
        {!session || !session.user ? (
          <Link
            href={paths.auth.login}
            className="bg-slate-400 rounded cursor-pointer"
          >
            Sign Up
          </Link>
        ) : null}
      </div>
    </div>
  );
}
