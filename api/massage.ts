import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = "vercel" } = req.query;
  return res.json({
    message: `server running on ${name}!`,
  });
}
