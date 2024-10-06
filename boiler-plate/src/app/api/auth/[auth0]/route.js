// app/api/auth/[auth0]/route.js
import { getAccessToken, getSession, handleAuth, handleCallback } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  callback: async (req, res) => {
    try {
      const response = await handleCallback(req, res);
      const { user } = await getSession(req, res);
      const token = await getAccessToken(req, res);
      console.log(user, token)

      // we will make our callback to backend server
      return response;
    } catch (error) {
      console.error(error);
    }
  }
});