import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="flex justify-center items-center min-h-96">
      {!session ? (
        <h1 className="texl-xl">Home Page</h1>
      ) : (
        <h1 className="text-xl">{`Welcome ${session?.user.name}`}</h1>
      )}
    </div>
  );
}
