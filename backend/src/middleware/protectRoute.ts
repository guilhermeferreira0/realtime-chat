import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../models/userModel';

interface UserTokenProps extends JwtPayload {
  userId: string;
}

export async function protectRouter(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const token = req.cookies.jwt;
    if (!token)
      return res
        .status(401)
        .json({ error: 'Unauthorized - No Token Provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as
      | UserTokenProps
      | undefined;
    if (!decoded)
      return res.status(401).json({ error: 'Unauthorized - Invalid token' });

    const user = await User.findById(decoded?.userId).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });

    req.body.user = user;
    return next();
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
