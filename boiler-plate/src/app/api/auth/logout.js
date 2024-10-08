import { handleLogout } from '@auth0/nextjs-auth0';

export default async function logout(req, res) {
  try {
    await handleLogout(req, res, {
      returnTo: process.env.AUTH0_BASE_URL, // Where to redirect after logout
      logoutParams: {
        federated: true,  // This ensures logging out from Auth0 SSO as well
      },
    });
  } catch (error) {
    res.status(error.status || 400).end(error.message);
  }
}
