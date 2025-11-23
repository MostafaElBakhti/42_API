import fetch from "node-fetch";

export default async function handler(req, res) {
  const { login } = req.query;


  const tokenRes = await fetch("https://api.intra.42.fr/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: process.env.UID,
      client_secret: process.env.SECRET
    })
  });

  const token = await tokenRes.json();

  const userRes = await fetch(
    `https://api.intra.42.fr/v2/users/${login}`,
    {
      headers: {
        Authorization: `Bearer ${token.access_token}`
      }
    }
  );

  const user = await userRes.json();

  res.status(200).json(user);
}
