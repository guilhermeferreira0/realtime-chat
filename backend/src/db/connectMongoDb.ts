import mongoose from 'mongoose';

export async function connectMongoDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log('Connected to MongoDB');
  } catch (e) {
    console.log('Error connecting to mongoDB', e);
  }
}
