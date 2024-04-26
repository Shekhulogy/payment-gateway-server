import type { VercelRequest, VercelResponse } from "@vercel/node";
import Razorpay from "razorpay";
import allowCors from "../../utils/cors";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_Oqm7HBK9mo9m4e",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "LRoBW7qiwQZ7jPxOffx2F1Gp",
});

const handler = async (req: VercelRequest, res: VercelResponse) => {
  if (req.method === "POST") {
    const { amount = 0 } = req.body;
    if (!amount) {
      return res.json({
        success: false,
      });
    }
    const options = {
      amount: Math.floor(amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);

    return res.json({
      success: true,
      order,
    });
  }
  return res
    .status(400)
    .json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
};

export default allowCors(handler);
