import Link from "next/link";
import paths from "@/lib/paths";

export default function Header() {
  return (
    <div className="flex justify-between p-4 bg-slate-400">
      <div>
        <Link href={paths.landingPage}>
          <h1>Flower Garder</h1>
        </Link>
      </div>
      <div className="flex gap-4">
        <div className="bg-slate-400 rounded cursor-pointer border-">
          Sign In
        </div>
        <div className="bg-slate-400 rounded cursor-pointer">Sign Up</div>
      </div>
    </div>
  );
}
