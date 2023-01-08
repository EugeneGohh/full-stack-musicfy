import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

// token validation function
export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // destructure & rename
    const { MUSICFY_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, "hello");
        // find in db
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not real user");
        }
      } catch (e) {
        res.status(401);
        res.json({ error: "Not Authorized" });
        return;
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not Authorized" });
  };
};

export default validateRoute;
