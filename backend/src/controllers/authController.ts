import { Request, Response } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt';
import { generateTokenAndSetCookie } from '../utils/generateToken';

export async function signup(req: Request, res: Response) {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword)
      return res.status(400).json({ error: 'Passwords don´t match' });

    const userExisting = await User.findOne({ username });
    if (userExisting)
      return res.status(400).json({ error: 'Username already exists!' });

    // HASH PASSWORD HERE
    const salt = await bcrypt.genSalt(10);
    const hashedPasswrod = await bcrypt.hash(password, salt);

    const profilePick = `https://api.dicebear.com/9.x/lorelei/svg/seed=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashedPasswrod,
      gender,
      profilePick: profilePick,
    });

    if (!newUser) {
      return res.status(400).json({ error: 'User invalid' });
    }
    // Generate JWT token here
    generateTokenAndSetCookie(newUser.id, res);

    await newUser.save();
    return res.status(201).json({
      success: true,
      data: {
        _id: newUser.id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePick: newUser.profilePick,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const userExisting = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExisting?.password || '',
    );

    if (!userExisting || !isPasswordCorrect)
      return res.status(400).json({ error: 'Invalid username or password' });

    generateTokenAndSetCookie(userExisting.id, res);

    return res.status(200).json({
      success: true,
      data: {
        _id: userExisting.id,
        fullname: userExisting.fullname,
        username: userExisting.username,
        profilePick: userExisting.profilePick,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: 'Interval Server Error' });
  }
}

export function logout(req: Request, res: Response) {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logged out Successfully!' });
  } catch (error) {
    return res.status(500).json({ error: 'Interval Server Error' });
  }
}
