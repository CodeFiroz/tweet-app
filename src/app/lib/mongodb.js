import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected:', conn.connection.host);

    // Check connection state
    if (mongoose.connection.readyState === 1) {
      console.log('MongoDB is connected.');
    } else {
      console.log('MongoDB connection state:', mongoose.connection.readyState);
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process if connection fails
  }
};

export default dbConnect;
