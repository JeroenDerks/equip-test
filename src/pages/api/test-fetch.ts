// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { pow: number; message?: never } | { pow?: never; message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const int = parseInt(req.body);

  if (!int && !isNaN(int)) {
    res.status(500).json({ message: "No valid value provided" });
    return;
  }

  res.status(200).json({ pow: Math.pow(int, int) });
}
