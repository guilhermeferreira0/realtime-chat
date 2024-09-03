import { type Request, type Response } from 'express';
import { app } from './src/app';
import 'dotenv/config';
import authRoutes from './src/routes/authRoutes';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Running! http://localhost:${port}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my API!');
});

app.use('/api/auth', authRoutes);
