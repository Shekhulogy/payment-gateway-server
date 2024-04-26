import type { VercelRequest, VercelResponse } from "@vercel/node";
import allowCors from "../utils/cors";

const handler = (req: VercelRequest, res: VercelResponse) => {
  const { name = "World" } = req.query;
  return res.json({
    message: `Hello ${name}!`,
  });
};

export default allowCors(handler);
