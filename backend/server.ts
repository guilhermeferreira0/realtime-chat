import { app } from './src/app';
import 'dotenv/config';

import { connectMongoDb } from './src/db/connectMongoDb';
import authRoutes from './src/routes/authRoutes';
import messageRoutes from './src/routes/messageRoutes';

const port = process.env.PORT || 3001;

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.listen(port, () => {
  connectMongoDb();
  console.log(`Running! http://localhost:${port}`);
});
