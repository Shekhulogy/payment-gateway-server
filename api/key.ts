import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { key_id = process.env.RAZORPAY_KEY_ID || "rzp_test_Oqm7HBK9mo9m4e" } =
    req.query;
  return res.json({
    key_id,
  });
}
