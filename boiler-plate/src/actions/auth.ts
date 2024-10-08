// here we will define our callback api

import { db } from "@/db";
import { getSession } from "@auth0/nextjs-auth0";

export async function checkUser() {
  const session = await getSession();
  if (!session) {
    return null
  }
  if (session.user) {
    const checkUser = await db.user.findFirst({ where: { sid: session.user.sid }})

    if (!checkUser) {
      // logic to add user in database 
    }
  }
}